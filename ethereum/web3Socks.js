import Web3 from 'web3';

let web3Socks;

const provider = new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws');

web3Socks = new Web3(provider);

export default web3Socks;