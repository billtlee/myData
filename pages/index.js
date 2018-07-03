import React, { Component } from 'react';
import { Table, Button, Input } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as superagent from 'superagent';

import factory from '../ethereum/factory';
import MyData from '../ethereum/myData';
import MyDataSocks from '../ethereum/myDataSocks';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';
import { Link, Router } from '../routes';

class MyDataIndex extends Component {
  state = {
    value: '',
    matched: [],
    registeredAccounts: [],
    loading: false,
    error: ''
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const registeredAccounts = await factory.methods.getRegisteredAccounts().call();

    let registeredAccountsCost = [];
    let displayState = [];

    for (var i=0, len=registeredAccounts.length; i<len; i++) {
      const myData=MyData(registeredAccounts[i]);
      const minPayment = web3.utils.fromWei(await myData.methods.minimumPayment().call());
      registeredAccountsCost[i]=minPayment;
      displayState[i]=false;
      const owner = await myData.methods.owner().call();
      const isOwner = owner === accounts[0];
      if (isOwner) {
        const myDataSocks = MyDataSocks(registeredAccounts[i]);

        myDataSocks.events.ReceivedPayment({}, async (error, event) => {
          if (!error) {
            const account = event.returnValues.fromAcct;
            const payment = web3.utils.fromWei(event.returnValues.payment);
  
            console.log('ReceivedPayment: ', account, payment);
            this.notify(`You received ${payment} ether from ${account}`);  
          } else {
            console.log('ReceivedPayment error:', error);
          }
        });
      }
    }

    this.setState({
      registeredAccounts,
      registeredAccountsCost,
      displayState
    });
  }

  notify = (msg) => {
    if (! toast.isActive(this.toastId)) {
      toast.info(msg, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  onMatch = async () => {
    let str=this.state.value.split(/[ ,]+/);
    // let str=this.state.value.split(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);
    console.log("str: ", str);
    let tempMatched=[]
    let foundAddresses=new Set();
    const curLocation = window.location;
    for (let i=0; i<str.length; i++){
      const res = await superagent.get(`${curLocation.protocol}//${curLocation.host}/api/findAddressByInterest/${str[i]}`)
        .then(res => res.body);
      for (let j=0; j<res.length; j++){
        foundAddresses.add(res[j].contractAddress);
      }
      const res1 = await superagent.get(`${curLocation.protocol}//${curLocation.host}/api/findAddressByBrands/${str[i]}`)
      .then(res => res.body);
      for (let j=0; j<res1.length; j++){
        foundAddresses.add(res1[j].contractAddress);
      }
      const res2 = await superagent.get(`${curLocation.protocol}//${curLocation.host}/api/findAddressByMedicalCondition/${str[i]}`)
      .then(res => res.body);
      for (let j=0; j<res2.length; j++){
        foundAddresses.add(res2[j].contractAddress);
      }
    }
    console.log("foundAddresses: ", foundAddresses);
    
    for (let i=0; i<this.state.registeredAccounts.length; i++){
      (foundAddresses.has(this.state.registeredAccounts[i])) && (tempMatched[i]=true);
    }

    this.setState({matched: tempMatched});
  }

  onGetAccess = async (address) => {
    const myData = MyData(address);
    
    const accounts = await web3.eth.getAccounts();
    const owner = await myData.methods.owner().call();
    if (accounts[0]!==owner){
      console.log('not owner', minPrice);
      this.setState({ loading: true, errorMessage: '' });
      const minPrice = await myData.methods.minimumPayment().call();
      try {
        await myData.methods.getAccess().send({
          from: accounts[0],
          value: minPrice
        });
      } catch (error) {
        this.setState({ loading: false, value: '' });
        this.setState({ errorMessage: error.message });
        return;
      }
    } else {
      console.log('owner');
    }
    const privateDataKey = web3.utils.hexToAscii(await myData.methods.getPrivateData().call({
      from: accounts[0]
    }));
    Router.pushRoute(`/mydata/${address}/privatedata/${privateDataKey}`);
  }

  // onGetPrivateData = async (address) => {
  //   const myData = MyData(address);
  //   const accounts = await web3.eth.getAccounts();
  //   const accessor = await myData.methods.isApprovedAccessor(accounts[0]).call();
  //   if (accessor){
  //     const privateDataKey = web3.utils.hexToAscii(await myData.methods.getPrivateData().call({
  //       from: accounts[0]
  //     }));
  //     Router.pushRoute(`/mydata/${address}/privatedata/${privateDataKey}`);
  //   } else {
  //     Router.pushRoute(`/mydata/${address}/unauthorized/privatedata`)
  //   }
  // }

  renderRow() {
    const { Row, Cell } = Table;
    return this.state.registeredAccounts.map((address, i) => {
        return (
          <Row active={this.state.matched[i]} key={i}>
            <Cell><Link route = {`/mydata/${address}/interests`}><a>{address}</a></Link></Cell>
            <Cell>{this.state.registeredAccountsCost[i]}</Cell>
            <Cell>
              <Button color="green" basic 
                loading={this.state.loading} 
                onClick={this.onGetAccess.bind(this, address)}
                >View
              </Button>
            </Cell>
            {/* <Cell>
              <Button color="teal" basic
                onClick={this.onGetPrivateData.bind(this,address)}
                >View
              </Button>
            </Cell> */}
          </Row>
        )
    })
  }

  render(){
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <ToastContainer autoClose={8000} />
        <h3>Registered Accounts</h3>
        <Input 
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value})}
          labelPosition="left"
        />
        <Button primary onClick={this.onMatch}>
            Match Interests
        </Button>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Address</HeaderCell>
              <HeaderCell>Min Price for Data (Ether)</HeaderCell>
              <HeaderCell>Private Data</HeaderCell>
              {/* <HeaderCell>Private Data</HeaderCell> */}
            </Row>
          </Header>
          <Body>
            {this.renderRow()}
          </Body>
        </Table>
      </Layout>
    )
  }
}

export default MyDataIndex;