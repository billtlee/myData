import React, { Component } from 'react';
import { Container, Divider, Card, Button } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyData from '../../ethereum/myData';
import MyDataSocks from '../../ethereum/myDataSocks';
import * as superagent from 'superagent';

import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';

class privateData extends Component {
  state = {
    privateData: {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      location: '',
      age: ''
    },
    isOwner: false,
    contractBalance: '',
    errorMessage: '',
    loading: false
  }

  static getInitialProps(props) {
    const address = props.query.address;
    const privateDataKey = props.query.key;
    let accessor;
    privateDataKey==='unauthorized' ? accessor = false : accessor = true;
    const myData = MyData(address);
    const myDataSocks = MyDataSocks(address);

    return { myDataSocks, myData, address, privateDataKey, accessor };
  }
  
  async componentDidMount () {
    let {myData, myDataSocks, address, privateDataKey, accessor} = this.props;

    const accounts = await web3.eth.getAccounts();

    let contractBalance;
    await web3.eth.getBalance(address).then(function(result) {
      contractBalance = web3.utils.fromWei(result);
    });

    const owner = await myData.methods.owner().call();
    const isOwner = owner === accounts[0];

    this.setState({
      contractBalance,
      isOwner
    });

    if (accessor){
      const curLocation = window.location;

      const privateData = await superagent.get(`${curLocation.protocol}//${curLocation.host}/api/getbyid/${privateDataKey}`)
      .then(res => res.body);
      
      this.setState({
        privateData: {
          firstName: privateData[0].name.first,
          lastName: privateData[0].name.last,
          mobile: privateData[0].mobile,
          email: privateData[0].email,
          location: privateData[0].location,
          age: privateData[0].age
        }
      });
    } else {
      this.setState({
        privateData: {
          firstName: 'unauthorized',
          lastName: 'unauthorized',
          mobile: 'unauthorized',
          email: 'unauthorized',
          location: 'unauthorized',
          age: 'unauthorized'
        }
      });
    }

    if (isOwner) {
  
      myDataSocks.events.ReceivedPayment({}, async (error, event) => {
        if (!error) {
          const account = event.returnValues.fromAcct;
          const payment = web3.utils.fromWei(event.returnValues.payment);

          console.log('ReceivedPayment: ', account, payment);
          this.notify(`You received ${account} ether from ${payment}`);

          let contractBalance;
          await web3.eth.getBalance(address).then(function(result) {
            contractBalance = web3.utils.fromWei(result);
          });

          this.setState({ contractBalance });

        } else {
          console.log('ReceivedPayment error:', error);
        }
      });
  
      // let passEventsReceivedPayment = myDataSocks.getPastEvents('ReceivedPayment', {
      //   filter: {}, 
      //   fromBlock: 0,
      //   toBlock: 'latest'
      // }, (error, events) => {
      //   if (!error) {
      //     console.log('passEventsReceivedPayment: ', events);
      //   } else {
      //     console.log('passEventsReceivedPayment Error: ', error);
      //   }
      // });
    }
  }

  notify = (msg) => {
    toast.info(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }

  onTransfer = async () => {
    this.setState({loading: true});
    try {
      const accounts = await web3.eth.getAccounts();
      await this.props.myData.methods.transferBalanceToOwner().send({
        from: accounts[0]
      });

      let contractBalance;
      await web3.eth.getBalance(this.props.address).then(function(result) {
        contractBalance = web3.utils.fromWei(result);
      });
      console.log('contract balance: ', contractBalance);
      
      this.setState({ contractBalance });
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
    } = this.state.privateData;

    return (
      <Card>
        <Card.Content header={`${firstName} ${lastName}`}/>
        <Card.Content meta={location}/>
        <Card.Content description={`Age: ${age}`}/>
        <Card.Content extra>
          <p>Mobile: {mobile}</p>
          <p>email: {email}</p>
        </Card.Content>
      </Card>
    )
  }

  render() {
    let ownerUI;
    if (this.state.isOwner) {
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
        <ToastContainer autoClose={8000} />
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