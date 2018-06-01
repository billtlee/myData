import React, { Component } from 'react';
import { Form, Card, Button, Message, Input, Checkbox } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import MyData from '../../ethereum/myData';
import { keccak256 } from 'js-sha3';
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
    let interests = new Set();

    for (var i=0; i<interestsConst.length; i++){
      await myData.methods.hasInterest(interestsConst[i].toLowerCase()).call() 
        && interests.add(interestsConst[i].toLowerCase());
    }

    return {
      myData: myData,
      address: props.query.address,
      interestsConst: interestsConst,
      interests: interests,
      readOnly: readOnly,
      contractBalance: contractBalance
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

    let interestsToAdd = [...this.state.interests];
    // let interestsToRemove = this.props.interestsConst.filter(x => !interestsToAdd.includes(x.toLowerCase()));
    // interestsToRemove = interestsToRemove.map(function(x){return x.toLowerCase()});
    // let tempInterestsConst = this.props.interestsConst.map(function(x){return x.toLowerCase()});
    // let interestsToAddMap = interestsToAdd.map(function(x){return tempInterestsConst.indexOf(x)});
    // let interestsToRemoveMap = interestsToRemove.map(function(x){return tempInterestsConst.indexOf(x)});

    this.setState({loading: true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
        for (var i=0; i<interestsToAdd.length; i++){
          console.log(interestsToAdd[i]);
          await this.props.myData.methods.setInterests(interestsToAdd[i]).send({
            from: accounts[0] 
          })
        }
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }
      this.setState({loading: false});
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