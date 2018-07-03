require('../config/config');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  '0x808C1E244f87Bf20835aE33a65FD6e4453917aD9'
);

export default instance;