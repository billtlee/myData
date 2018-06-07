import React, { Component } from 'react';
import { Form, Card, Button, Message, Input, Checkbox } from 'semantic-ui-react';
import faker from 'faker';
import * as superagent from 'superagent';

import factory from '../../ethereum/factory';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

const privateDataType = require('../../lib/privateData');
const publicDataType = require('../../lib/publicData');
let ObjectID = require('bson-objectid');

class Register extends Component {

  state = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: '29',
    mobile: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    location: faker.address.country(),
    minPrice: '0.001',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const { firstName, lastName, age, mobile, email, minPrice, location } = this.state;

    let contractAddress;
    const privateDataKey = new ObjectID;
    const publicDataKey = new ObjectID;
    const accounts = await web3.eth.getAccounts();

    this.setState({loading: true, errorMessage: ''});
    try {
      // create account on blockchain
      await factory.methods.createAccount(
        web3.utils.fromAscii(publicDataKey.str),
        web3.utils.fromAscii(privateDataKey.str),
        web3.utils.toWei(minPrice, 'ether')
      ).send({
        from: accounts[0]
      });

      //get contract address from blockchain
      contractAddress = await factory.methods.getMyDataAddress(accounts[0]).call();

      const privateData = new privateDataType({
        _id: privateDataKey.str,
        contractAddress,
        name: {
          first: firstName,
          last: lastName
        },
        age,
        email,
        location,
        mobile
      });

      const curLocation = window.location;
      //create private data record in database
      await superagent.post(`${curLocation.protocol}//${curLocation.host}/api`, privateData).then(async res => {
        console.log('res: ', res);
      }).catch (err => console.error(err.stack));

      const publicData = new publicDataType({
        _id: publicDataKey.str,
        contractAddress,
        interests: [],
        brands: [],
        medicalCondition: []
      });

      //create public data record in database
      await superagent.post(`${curLocation.protocol}//${curLocation.host}/api`, publicData).then(async res => {
        console.log('res: ', res);
      }).catch (err => console.error(err.stack));

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({loading: false});

    // Router.pushRoute('/');

  }

  render () {
    return (
      <Layout>
        <h3>Index Page</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>First Name</label>
            <Input 
              value={this.state.firstName}
              onChange={event => this.setState({firstName: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input 
              value={this.state.lastName}
              onChange={event => this.setState({lastName: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <Input 
              value={this.state.age}
              onChange={event => this.setState({age: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Mobile</label>
            <Input 
              value={this.state.mobile}
              onChange={event => this.setState({mobile: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input 
              value={this.state.email}
              onChange={event => this.setState({email: event.target.value})}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <Input 
              value={this.state.location}
              onChange={event => this.setState({location: event.target.value})}
            />
          </Form.Field>          <Form.Field>
            <label>Minimum price to access your data in Ether</label>
            <Input 
              value={this.state.minPrice}
              onChange={event => this.setState({minPrice: event.target.value})}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Register</Button>
        </Form>
      </Layout>
    )
  }
}

export default Register;