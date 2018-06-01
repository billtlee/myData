const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const MyData = require('../ethereum/build/MyData.json');

let accounts;
let myData;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  myData = await new web3.eth.Contract(JSON.parse(MyData.interface))
    .deploy({ data: MyData.bytecode, arguments: ['Bill', 'Lee', '+85291703152', 'Hong Kong', 'wlee3@hotmail.com', '100'] })
    .send({ from: accounts[0], gas: '1500000' });
});

describe('MyData', () => {
  it('deploys a contract', () => {
    assert.ok(myData.options.address);
  });

  it('can set interests and find interest', async () => {
    await myData.methods.setInterests('Golf').send({
      from: accounts[0],
      gas: 1000000
    });
    const foundInterest = await myData.methods.hasInterest('golf').call();
    assert(foundInterest);
  });

  it('can get private data from another account with minimum payment', async() => {
    await myData.methods.getAccess().send({
      from: accounts[1],
      value: 200
    });

    const returnValues = await myData.methods.getPrivateData().call({
      from: accounts[1]
    });
    assert.equal('Bill', returnValues[0]);
  });  

  it('can get private data from another account with minimum payment only once', async() => {
    await myData.methods.getAccess().send({
      from: accounts[1],
      value: 200
    });

    console.log(await myData.methods.approvedAccessors(accounts[1]).call());
    let returnValues = await myData.methods.getPrivateData().call({
      from: accounts[1],
    });
    console.log(returnValues);

    console.log(await myData.methods.approvedAccessors(accounts[1]).call());
    returnValues = await myData.methods.getPrivateData().call({
      from: accounts[1]
    });
    console.log(returnValues);
  });
});