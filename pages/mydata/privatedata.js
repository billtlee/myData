import React, { Component } from 'react';
import MyData from '../../ethereum/myData';
import MyDataSocks from '../../ethereum/myDataSocks';
import { Container, Divider, Card, Button } from 'semantic-ui-react';
import * as superagent from 'superagent';

import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';

class privateData extends Component {
  state = {
    contractBalance: this.props.contractBalance,
    errorMessage: '',
    loading: false
  }

  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const { address } = props.query;
    const myData = MyData(address);
    const myDataSocks = MyDataSocks(address);

    let firstName = 'unauthorized';
    let lastName = 'unauthorized';
    let mobile = 'unauthorized';
    let email = 'unauthorized';
    let location = 'unauthorized';
    let age = 'unauthorized';

    let contractBalance;
    await web3.eth.getBalance(props.query.address).then(function(result) {
      contractBalance = web3.utils.fromWei(result);
    });

    const owner = await myData.methods.owner().call();
    const isOwner = owner === accounts[0];
    const accessor = await myData.methods.isApprovedAccessor(accounts[0]).call();

    if (accessor){
      const privateDataKey = web3.utils.hexToAscii(await myData.methods.getPrivateData().call({
        from: accounts[0]
      }));

      const curLocation = window.location;

      const privateData = await superagent.get(`${curLocation.protocol}//${curLocation.host}/api/getbyid/${privateDataKey}`)
      .then(res => res.body);
      
      firstName = privateData[0].name.first;
      lastName = privateData[0].name.last;
      mobile = privateData[0].mobile;
      email = privateData[0].email;
      location = privateData[0].location;
      age = privateData[0].age;
    } else {
      firstName = 'unauthorized';
      lastName = 'unauthorized';
      mobile = 'unauthorized';
      email = 'unauthorized';
      location = 'unauthorized';
      age = 'unauthorized';
    }

    return { firstName, lastName, mobile, email, location, age, isOwner, myDataSocks, myData, accounts, contractBalance };
  }
  
  async componentDidMount () {
    let {myDataSocks} = this.props;
    let eventDataAccessed = myDataSocks.events.DataAccessed({}, (error, event) => {
      if (!error) {
        console.log('DataAccessed: ', event.returnValues.accessor);
      } else {
        console.log('DataAccessed error: ', error);
      }

    });
    console.log('eventDataAccessed: ', eventDataAccessed);

    let eventReceivedPayment = myDataSocks.events.ReceivedPayment({}, (error, event) => {
      if (!error) {
        console.log('ReceivedPayment: ', event.returnValues);
      } else {
        console.log('ReceivedPayment error:', error);
      }
    });
    console.log('eventReceivedPayment: ', eventReceivedPayment);

    let passEventsDataAccessed = myDataSocks.getPastEvents('DataAccessed', {
      filter: {}, 
      fromBlock: 0,
      toBlock: 'latest'
    }, (error, events) => {
      if (!error) {
        console.log('passEventsDataAccessed: ', events);
      } else {
        console.log('passEventsDataAccessed Error: ', error);
      }
    });
    console.log('passEventsDataAccessed: ', passEventsDataAccessed);

    let passEventsReceivedPayment = myDataSocks.getPastEvents('ReceivedPayment', {
      filter: {}, 
      fromBlock: 0,
      toBlock: 'latest'
    }, (error, events) => {
      if (!error) {
        console.log('passEventsReceivedPayment: ', events);
      } else {
        console.log('passEventsReceivedPayment Error: ', error);
      }
    });
    console.log('passEventsReceivedPayment: ', passEventsReceivedPayment);
  }

  onTransfer = async () => {
    this.setState({loading: true});
    try {
      await this.props.myData.methods.transferBalanceToOwner().send({
        from: this.props.accounts[0]
      });
    } catch (error) {
      console.log('Transfer to owner error: ',error)
    }
    this.setState({loading: false});
  }

  renderCard() {
    const {
      firstName,
      lastName,
      mobile,
      email,
      location,
      age
    } = this.props;

    return <Card>
      <Card.Content header={`${firstName} ${lastName}`}/>
      <Card.Content meta={location}/>
      <Card.Content description={`Age: ${age}`}/>
      <Card.Content extra>
        <p>Mobile: {mobile}</p>
        <p>email: {email}</p>
      </Card.Content>
    </Card>

  }

  render() {
    let ownerUI;
    if (this.props.isOwner) {
      ownerUI = (
        <Container>
          <Divider/>
          <p>Contract balance: {this.state.contractBalance}</p>
          <Button loading={this.state.loading} onClick={this.onTransfer} primary>Transfer Balance</Button>
        </Container>
      )
    }

    return(
      <Layout>
        <Link route="/">
          <a>Back</a>
        </Link>
        <h3>Private Data</h3>
        {this.renderCard()}
        {ownerUI}
      </Layout>
    )
  }
}

export default privateData;