import React, { Component } from 'react';
import { Form, Card, Button, Message, Input, Checkbox } from 'semantic-ui-react';
import * as superagent from 'superagent';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import MyData from '../../ethereum/myData';
import { Router } from '../../routes';

class Interests extends Component {
  static async getInitialProps(props) {
    const myData = MyData(props.query.address);
    let contractBalance;
    await web3.eth.getBalance(props.query.address).then(function(result) {
      contractBalance = web3.utils.fromWei(result);
    });
    console.log('contract balance: ', contractBalance);
    const accounts = await web3.eth.getAccounts();
    const owner = await myData.methods.owner().call();
    const readOnly = !(accounts[0]===owner);
    
    const interestsConst = ["Tennis", "Golf", "Shopping", "Movie", "Hiking", "Reading", "Diving", "Investing"];

    const publicDataKey = web3.utils.hexToAscii(await myData.methods.publicDataKey().call());
    console.log(publicDataKey);

    const detail = await superagent.get(`http://${window.location.host}/api/getbyid/${publicDataKey}`)
    .then(res => res.body);

    let interests = new Set(detail[0].interests);

    return {
      myData,
      address: props.query.address,
      interestsConst,
      interests,
      readOnly,
      contractBalance,
      publicDataKey
    };
  }

  state = {
    interests: new Set(this.props.interests),
    readOnly: this.props.readOnly,
    errorMessage: '',
    loading: false
  }

  onSubmit = async event => {
    event.preventDefault();

    let interests = [...this.state.interests];

    superagent.patch(`http://${window.location.host}/api/update/${this.props.publicDataKey}`, {interests}).then(async res => {
      }).catch (err => console.error(err.stack));

  }

  onChange = (event, data) => {
    let newSet = new Set(this.state.interests);
    data.checked ? newSet.add(data.value) : newSet.delete(data.value);
    this.setState({interests: newSet});
  }

  renderFormField () {
    return this.props.interestsConst.map((interest, index) => {
      return <Form.Field key={index}>
      <Checkbox 
        label={interest}
        name="Interests"
        readOnly={this.state.readOnly}
        value={interest.toLowerCase()}
        checked={this.state.interests.has(interest.toLowerCase())}
        onChange={this.onChange}
      />
    </Form.Field>
    })
  }

  render () {
    const {
      readOnly,
      interests,
      errorMessage,
      loading
    } = this.state;

    return(
      <Layout>
        <h3>Interests</h3>
        <p>Contract balance: {this.props.contractBalance} ether</p>
        <Form onSubmit={this.onSubmit} error={!!errorMessage}>
          {this.renderFormField()}
          <Message error header="Oops!" content={errorMessage} />
          <Button loading={loading} disabled={readOnly} primary>Update</Button>
        </Form>
      </Layout>
    )
  }
}

export default Interests;