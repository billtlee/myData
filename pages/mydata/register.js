import React, { Component } from 'react';
import { Form, Card, Button, Message, Input, Checkbox } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class Register extends Component {

  state = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    location: '',
    minPrice: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

//    const campaign = Campaign(this.props.address);
    const { firstName, lastName, mobile, email, minPrice, location } = this.state;

    this.setState({loading: true, errorMessage: ''});

    let accounts;

    try {
      accounts = await web3.eth.getAccounts();
      await factory.methods.createAccount(
        web3.utils.fromAscii(firstName),
        web3.utils.fromAscii(lastName),
        web3.utils.fromAscii(mobile),
        web3.utils.fromAscii(email),
        web3.utils.fromAscii(location),
        web3.utils.toWei(minPrice, 'ether')
      ).send({
        from: accounts[0]
      });
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({loading: false});

    const dataAddress = await factory.methods.getMyDataAddress(accounts[0]).call();
//    Router.pushRoute(`/mydata/${dataAddress}/interests`);
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