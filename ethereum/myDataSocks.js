import web3Socks from './web3Socks';
import MyData from './build/MyData.json';

export default (address) => {
  return new web3Socks.eth.Contract(
    JSON.parse(MyData.interface),
    address
  );
};