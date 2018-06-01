require('../config/config');
const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/MyDataFactory.json');

const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  process.env.PROVIDER_URI
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1500000', from: accounts[0] });

  console.log('Contract deployed to ', result.options.address);
  const configObj = {
    location: process.env.NODE_ENV,
    contractAddress: result.options.address
  }

  fs.writeFileSync('./config/contractAddress.json', JSON.stringify(configObj, null, 2), (err) => {  
    if (err) throw err;
    console.log('Data written to file');
  });
};
deploy();