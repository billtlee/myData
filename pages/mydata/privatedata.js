import React, { Component } from 'react';
import MyData from '../../ethereum/myData';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';

class privateData extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const { address } = props.query;
    const myData = MyData(address);

    const pdata = await myData.methods.getPrivateData().call({
      from: accounts[0]
    });

    // var myDataEvent = myData.GetPrivateData();
    // myDataEvent.watch(function(error, result){
    //   if (!error)
    //     console.log(result);
    // });

    const accessor = await myData.methods.isApprovedAccessor(accounts[0]).call();
    console.log(accounts[0], accessor);
    const firstName = web3.utils.hexToAscii(pdata[0]);
    const lastName = web3.utils.hexToAscii(pdata[1]);
    const mobile = web3.utils.hexToAscii(pdata[2]);
    const email = web3.utils.hexToAscii(pdata[3]);
    const location = web3.utils.hexToAscii(await myData.methods.location().call());

    return { address, firstName, lastName, mobile, email, location };
  }
  
  renderCard() {
    const {
      firstName,
      lastName,
      mobile,
      email,
      location
    } = this.props;

    return <Card
      header={`${firstName} ${lastName}`}
      meta={location}
      description={`Mobile: ${mobile}`}
      extra = {`email: ${email}`}
    />
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