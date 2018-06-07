import React, { Component } from 'react';
import MyData from '../../ethereum/myData';
import { Card } from 'semantic-ui-react';
import * as superagent from 'superagent';

import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';

class privateData extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const { address } = props.query;
    const myData = MyData(address);

    let firstName = 'unauthorized';
    let lastName = 'unauthorized';
    let mobile = 'unauthorized';
    let email = 'unauthorized';
    let location = 'unauthorized';
    let age = 'unauthorized';

    const accessor = await myData.methods.isApprovedAccessor(accounts[0]).call();

    if (accessor){
      let privateDataKey;
      privateDataKey = await myData.methods.getPrivateData().call({
        from: accounts[0]
      });
      console.log(privateDataKey);
      privateDataKey = web3.utils.hexToAscii(privateDataKey);
      console.log(privateDataKey);

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

    return { firstName, lastName, mobile, email, location, age };
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
    return(
      <Layout>
        <Link route="/">
          <a>Back</a>
        </Link>
        <h3>Private Data</h3>
        {this.renderCard()}
      </Layout>
    )
  }
}

export default privateData;