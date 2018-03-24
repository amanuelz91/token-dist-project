import React, { Component } from 'react';
import './TokenInfo.css';
import Web3 from 'web3';

class TokenInfo extends Component {
constructor(props) {
super(props);

 this.state = {
    file:null,
    text:null,
    tokenArray: null,
    tokenCount: 0,
    addressCount: 0,
    web3: null,
    deployedContract: null,
    deployedTokenInstance: null,
    tokenInfoArray: null
 };

 this.onChange = this.onChange.bind(this);
 this.onContractSubmit =  this.onContractSubmit.bind(this);
}

onChange(e) {
    var _file = e.target.files[0];
    this.setState({file:e.target.files[0]});
    console.log("FILE UPLOADED"+e.target.files[0]);

    var reader = new FileReader();

     reader.onload = function(e) {
       _file = reader.result;
       console.log("iNSIDE OF ONLOAD");
       console.log(_file);
         // console.log(web3);


        // console.log(tokenInfoContents);
       var parsedTokenInfo = String(_file).split("\n");
       //parsedTokenInfo = parsedTokenInfo.split(",");
       this.setState({tokenArray: parsedTokenInfo});
       console.log(this.state.tokenArray);
       for(var i=0; i< parsedTokenInfo.length; i++){
         parsedTokenInfo[i]=parsedTokenInfo[i].split(",");
       }
       console.log(parsedTokenInfo);
       var _addressCount = 0;
       var _tokenCount = 0;

       for(var i=0; i<parsedTokenInfo.length-1; i++){
         _addressCount+=1;
         _tokenCount += parseInt(parsedTokenInfo[i][1]);
       }

       this.setState({ tokenCount: _tokenCount });
       this.setState({ addressCount: _addressCount });
       console.log("TOKEN COUNT "+this.state.tokenCount);
       console.log("ADDRESS COUNT "+this.state.addressCount);

             // ABI
       var abi = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

       this.setState({tokenInfoArray: parsedTokenInfo});
      // abi address
       var address = "0xF8E2D9Daeb7Dd6D7c68De96b2f03974c423c3F64";
       this.setState({deployedContract: this.state.web3.eth.contract(abi)});
       this.setState({deployedTokenInstance: this.state.deployedContract.at(address)});
       var toAddress_ = String(parsedTokenInfo[0][0]);
       console.log("PARSED TOKEN INFO: "+ toAddress_);

      }.bind(this);
      reader.readAsText(_file, 'utf8');
    };

    componentWillMount() {
      console.log("componentWillMount");
    }

    componentDidMount(){
      this.setState({web3: window.web3});
      console.log("Component Did Mount"+this.state.web3);
    }
    onContractSubmit(e){
      e.preventDefault();
      console.log("ON CONTRACT SUBMIT");
      for(var i=0; i<2; i++){

      try{
          this.state.deployedTokenInstance.transfer.sendTransaction(this.state.tokenInfoArray[i][0],this.state.tokenInfoArray[i][1],function(err,res){console.log(err);});
        }
        catch(error){
          console.log(error);
        }

     }
    }
    render() {
      return (
        <div className = "tokenHeader">
        <form className = "tokenForm" onSubmit={this.onFormSubmit}>
            <h1>Token Distribution Metrics</h1>
            <input type="file" onChange={this.onChange} />


            <h1>Token Count: {this.state.tokenCount}</h1>
            <h1>Address Count: {this.state.addressCount}</h1>

            <button type="button" onClick={this.onContractSubmit}>Distribute Funds</button>

        </form>
        </div>
      )

    }
}


export default TokenInfo;
