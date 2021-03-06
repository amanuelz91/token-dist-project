import React, { Component } from 'react';
import './TokenInfo.css';
//import Web3 from 'web3';

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
    tokenInfoArray: null,
    dataVizService:[],
    tokenContractaddress: null
 };



 this.onChange = this.onChange.bind(this);
 this.onContractSubmit =  this.onContractSubmit.bind(this);
 this.filterWatch = this.filterWatch.bind(this);
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
       // parsedTokenInfo.length-1
       for(var j=0; j<parsedTokenInfo.length-1; j++){
         _addressCount+=1;
         _tokenCount += parseInt(parsedTokenInfo[j][1]);

         let dataViz =
            <li className="AccountUL">
              <div className="AccountLiDiv">
                {this.state.tokenArray[j][0]}
              </div>
            </li>
         let dataVizService_slice = this.state.dataVizService.slice();
         console.log("UPDATING DATA VIZ" + dataVizService_slice);
         dataVizService_slice.push(dataViz);
         this.setState({dataVizService: dataVizService_slice});


       }

       this.setState({ tokenCount: _tokenCount });
       this.setState({ addressCount: _addressCount });
       console.log("TOKEN COUNT "+this.state.tokenCount);
       console.log("ADDRESS COUNT "+this.state.addressCount);

             // ABI


      var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]


       this.setState({tokenInfoArray: parsedTokenInfo});
       // var abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
      // abi address
    //   var address = "0xF8E2D9Daeb7Dd6D7c68De96b2f03974c423c3F64";
    //   this.state.web3.personal.unlockAccount("0xf952570dbbeb5ced1d9885f2b5649f42d2b606d6", "ThisPasswordIsFake12345", 100);
    //  var address = "0x028761de2f9A32DF6329C28C6B4F4d6e2BA36A44"; //Rinkeby Deployed
       var address = this.state.tokenContractaddress;
       // window.web3.eth.defaultAccount = this.state.web3.eth.accounts[0];
       this.setState({deployedContract: this.state.web3.eth.contract(abi)});
       this.setState({deployedTokenInstance: this.state.deployedContract.at(this.state.tokenContractaddress)});
       var toAddress_ = String(parsedTokenInfo[0][0]);
       console.log("PARSED TOKEN INFO: "+ toAddress_);

       console.log("TOKEN ARRAY "+this.state.tokenInfoArray[0][0]);

      }.bind(this);
      reader.readAsText(_file, 'utf8');
    };

    componentWillMount() {
      console.log("componentWillMount");
    }

    componentDidMount(){
        this.setState({tokenContractaddress: "0x028761de2f9A32DF6329C28C6B4F4d6e2BA36A44" });
        var newWeb3 = new window.Web3(new window.Web3.providers.HttpProvider('http://127.0.0.1:8545'));
       //var newWeb3 = new window.Web3(new window.Web3.providers.HttpProvider('http://127.0.0.0:8545'));
      // var newWeb3 = window.web3;
      // var newWeb3 = new window.Web3(window.web3.currentProvider);
      if(newWeb3 != null){
        console.log("New Web 3 = "+newWeb3);
        this.setState({web3:newWeb3},()=>{
            console.log("Updated Web3 State = "+this.state.web3);
            this.filterWatch();
        });
      }
      else{
        this.setState({web3: window.web3});
        console.log("Component Did Mount"+this.state.web3);
      }



    }
    onContractSubmit(e){
      e.preventDefault();
      console.log("ON CONTRACT SUBMIT");
      console.log("DEFAULT ACCOUNT: "+this.state.web3.eth.accounts[0]);
      this.filterWatch();
      // this.state.tokenArray.length-1
      for(var i=0; i<this.state.tokenArray.length-1; i++){
        console.log("I am IIII, i= "+i+"\n");
        let dataViz =
           <li className="DataUL">{this.state.tokenArray[i][0]}</li>
        var dataVizService_slice = this.state.dataVizService.slice();
        console.log("UPDATING DATA VIZ");
        dataVizService_slice.push(dataViz);
        this.setState({dataVizService: dataVizService_slice});
          // try{
            //console.log("trying contract call "+this.state.deployedTokenInstance.transferFrom);
              this.state.deployedTokenInstance.transferFrom(
                this.state.web3.eth.accounts[0], this.state.tokenArray[i][0], this.state.tokenArray[i][1],{from:this.state.web3.eth.accounts[0]},
                  function(err,res)
                  {
                    // Index based on Hash
                    if(!err){
                      var newTokenArray = this.state.tokenArray.slice();
                      newTokenArray[i][2] = String(res);
                      this.setState({tokenArray:newTokenArray});
                      console.log("Token Array after Contract Submit, i="+i+", "+this.state.tokenArray[i]);
                    }
                    else{
                       console.log("Error in Contract Submit"+err);
                    }
                  }.bind(this)
                );
            // }
            // catch(error){
              // console.log("Error in Contract Submit"+error);
            // }
        }


      }

    filterWatch(){
          var address_ = this.state.tokenContractaddress;
          // var block = this.state.web3.eth.getBlock(result, true);
          var options = {
            // fromBlock: block,
            // toBlock: block + 100,
            address: address_
          };

          var filter = this.state.web3.eth.filter(options);

          filter.watch(function(error, result) {
              if (!error) {
                  console.log(result);
              }
          }.bind(this));

      // var filter = this.state.web3.eth.filter('latest');
      //   filter.watch(function(error, result) {
      //   var block = this.state.web3.eth.getBlock(result, true);
      //   console.log('block #' + block.number);
      //   // console.dir(block.transactions);
      // }.bind(this));
    }
    render() {
      return (

        <div>
            <ul className="DataUL">
              <li className="DataLI">
                <ol className="AccountOL">
                    {this.state.dataVizService}
                </ol>
              </li>
              <li>

                    <h1>Token Distribution Metrics</h1>


                    <ol className="ConsoleLi">
                        <ul className="MetricsUL">
                            <li className="MetricsLi">Token Count: {this.state.tokenCount}</li>
                            <li className="MetricsLi">TAddress Count: {this.state.addressCount}</li>
                        </ul>
                        {/*<ul className="MetricsUL">*/}
                            <li><input className="TokenFormInput" type="file" onChange={this.onChange} /></li>
                            <li><button type="button" onClick={this.onContractSubmit}>Distribute Funds</button></li>
                        {/*</ul>*/}
                    </ol>


              </li>
            </ul>

        </div>
      )

    }
}


export default TokenInfo;
