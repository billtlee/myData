require('../config/config');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

console.log('Getting address from: ', process.env.LOCATION);
const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  '0xFd0b450a32b381B722beE14a613F120FE0109A4e'
);

export default instance;