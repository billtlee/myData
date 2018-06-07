import React, { Component } from 'react';
import { Form, Grid, Button, Message, Checkbox } from 'semantic-ui-react';
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

    const accounts = await web3.eth.getAccounts();
    const owner = await myData.methods.owner().call();
    const readOnly = !(accounts[0]===owner);
    
    const interestsConst = ["Tennis", "Golf", "Shopping", "Movie", "Hiking", "Reading", "Diving", "Investing"];
    const brandsConst = ["Chanel", "Louis Vuitton", "H&M", "ZARA", "Hermes", "Gucci", "Cartier", "Burberry", "Nike", "Adidas", "Lululemon", "Athleta"];
    const medicalConditionConst = ["Hypertension", "Hyperlipidemia", "Diabetes", "Back pain", "Anxiety", "Asthma", "Cancer", "Depression", "Shingles"];

    const publicDataKey = web3.utils.hexToAscii(await myData.methods.publicDataKey().call());

    const detail = await superagent.get(`${window.location.protocol}://${window.location.host}/api/getbyid/${publicDataKey}`)
    .then(res => res.body);

    console.log("detail: ", detail[0]);

    let interests = new Set(detail[0].interests);
    let brands = new Set(detail[0].brands);
    let medicalCondition = new Set(detail[0].medicalCondition);

    return {
      myData,
      address: props.query.address,
      interestsConst,
      interests,
      brandsConst,
      brands,
      medicalConditionConst,
      medicalCondition,
      readOnly,
      contractBalance,
      publicDataKey
    };
  }

  state = {
    interests: new Set(this.props.interests),
    brands: new Set(this.props.brands),
    medicalCondition: new Set(this.props.medicalCondition),
    readOnly: this.props.readOnly,
    errorMessage: '',
    loading: false
  }

  onSubmit = async event => {
    event.preventDefault();

    let interests = [...this.state.interests];
    let brands = [...this.state.brands];
    let medicalCondition = [...this.state.medicalCondition];

    superagent.patch(`${window.location.protocol}://${window.location.host}/api/update/${this.props.publicDataKey}`, {interests}).then(async res => {
      }).catch (err => console.error(err.stack));

      superagent.patch(`${window.location.protocol}://${window.location.host}/api/update/${this.props.publicDataKey}`, {brands}).then(async res => {
      }).catch (err => console.error(err.stack));  

      superagent.patch(`${window.location.protocol}://${window.location.host}/api/update/${this.props.publicDataKey}`, {medicalCondition}).then(async res => {
      }).catch (err => console.error(err.stack));
  }

  onInterestsChange = (event, data) => {
    let newInterestsSet = new Set(this.state.interests);
    data.checked ? newInterestsSet.add(data.value) : newInterestsSet.delete(data.value);
    this.setState({interests: newInterestsSet});
  }

  onBrandsChange = (event, data) => {
    let newBrandsSet = new Set(this.state.brands);
    data.checked ? newBrandsSet.add(data.value) : newBrandsSet.delete(data.value);
    this.setState({brands: newBrandsSet});
  }

  onMedicalConditionChange = (event, data) => {
    let newMedicalConditionSet = new Set(this.state.medicalCondition);
    data.checked ? newMedicalConditionSet.add(data.value) : newMedicalConditionSet.delete(data.value);
    this.setState({medicalCondition: newMedicalConditionSet});
  }

  renderInterestsFormField () {
    return this.props.interestsConst.map((interests, index) => {
      return <Form.Field key={index}>
          <Checkbox 
            label={interests}
            name="Interests"
            readOnly={this.state.readOnly}
            value={interests.toLowerCase()}
            checked={this.state.interests.has(interests.toLowerCase())}
            onChange={this.onInterestsChange}
          />
      </Form.Field>
    })
  }

  renderBrandsFormField () {
    return this.props.brandsConst.map((brands, index) => {
      return <Form.Field key={index}>
          <Checkbox 
            label={brands}
            name="Brands"
            readOnly={this.state.readOnly}
            value={brands.toLowerCase()}
            checked={this.state.brands.has(brands.toLowerCase())}
            onChange={this.onBrandsChange}
          />
      </Form.Field>
    })
  }

  renderMedicalConditionFormField () {
    return this.props.medicalConditionConst.map((medicalCondition, index) => {
      return <Form.Field key={index}>
          <Checkbox 
            label={medicalCondition}
            name="MedicalCondition"
            readOnly={this.state.readOnly}
            value={medicalCondition.toLowerCase()}
            checked={this.state.medicalCondition.has(medicalCondition.toLowerCase())}
            onChange={this.onMedicalConditionChange}
          />
      </Form.Field>
    })
  }

  render () {
    const {
      readOnly,
      interests,
      brands,
      medicalCondition,
      errorMessage,
      loading
    } = this.state;

    return(
      <Layout>
        <p>Contract balance: {this.props.contractBalance} ether</p>
        <Form onSubmit={this.onSubmit} error={!!errorMessage}>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                  <h4>Interests</h4>
                  {this.renderInterestsFormField()}
              </Grid.Column>
              <Grid.Column>
                  <h4>Brands</h4>
                  {this.renderBrandsFormField()}
              </Grid.Column>
              <Grid.Column>
                  <h4>Medical Condition</h4>
                  {this.renderMedicalConditionFormField()}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Message error header="Oops!" content={errorMessage} />
          <Button loading={loading} disabled={readOnly} primary>Update</Button>
        </Form>
      </Layout>
    )
  }
}

export default Interests;