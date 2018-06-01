const deployedContract = require('../config/contractAddress.json');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

console.log('Getting address from: ', deployedContract.location);
const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  deployedContract.contractAddress
);

export default instance;