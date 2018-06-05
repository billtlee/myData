require('../config/config');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

console.log('Getting address from: ', process.env.LOCATION);
const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  process.env.CONTRACTADDRESS
);

export default instance;