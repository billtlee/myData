import Web3 from 'web3';

let web3Socks;

const provider = new Web3.providers.WebsocketProvider('ws://localhost:8545');

web3Socks = new Web3(provider);

export default web3Socks;