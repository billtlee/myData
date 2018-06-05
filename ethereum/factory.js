require('../config/config');
import web3 from "./web3";
import MyDataFactory from './build/MyDataFactory.json';

console.log('Getting address from: ', process.env.LOCATION);
const instance = new web3.eth.Contract (
  JSON.parse(MyDataFactory.interface),
  '0x600b3ABc0d043a7621E9b158029C9Ea64e94a477'
);

export default instance;