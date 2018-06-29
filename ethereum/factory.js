require('../config/config');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

console.log('Getting address from: ', process.env.LOCATION);
const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  '0x40292e639cB2685E5AbBe4a26AE913A0393aD877'
);

export default instance;