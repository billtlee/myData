require('../config/config');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

console.log('Getting address from: ', process.env.LOCATION);
const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  '0xB4c7010911F07594e6D031266EAeaAE96BA31C4b'
);

export default instance;