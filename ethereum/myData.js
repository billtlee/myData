import web3 from './web3';
import MyData from './build/MyData.json';

export default (address) => {
  return new web3.eth.Contract(
    JSON.parse(MyData.interface),
    address
  );
};