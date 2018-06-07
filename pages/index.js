import React, { Component } from 'react';
import { Table, Button, Message, Input } from 'semantic-ui-react';
import * as superagent from 'superagent';

import factory from '../ethereum/factory';
import MyData from '../ethereum/myData';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';
import { Link } from '../routes';

class MyDataIndex extends Component {
  state = {
    value: '',
    matched: [],
    registeredAccounts: [],
    loading: false,
    error: ''
  }

  async componentDidMount() {
    const registeredAccounts = await factory.methods.getRegisteredAccounts().call();

    let registeredAccountsCost = [];
    let displayState = [];

    for (var i=0, len=registeredAccounts.length; i<len; i++) {
      const minPayment = web3.utils.fromWei(await MyData(registeredAccounts[i]).methods.minimumPayment().call());
      registeredAccountsCost[i]=minPayment;
      displayState[i]=false;
    }

    this.setState({
      registeredAccounts,
      registeredAccountsCost,
      displayState
    });
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
      this.setState({ loading: true, errorMessage: '' });
      const minPrice = await myData.methods.minimumPayment().call();
      console.log('not owner', minPrice);
      try {
        await myData.methods.getAccess().send({
          from: accounts[0],
          value: minPrice
        });
      } catch (error) {
        this.setState({ errorMessage: error.message });
      }
      this.setState({ loading: false, value: '' });
    } else {
      console.log('owner');
    }
  }

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
                >Pay
              </Button>
            </Cell>
            <Cell>
              <Button color="teal" basic>
                <Link route = {`/mydata/${address}/privatedata`}><a>View</a>
                </Link>
              </Button>
            </Cell>
          </Row>
        )
    })
  }

  render(){
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
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
              <HeaderCell>Authorization</HeaderCell>
              <HeaderCell>Private Data</HeaderCell>
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