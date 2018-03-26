### Token Distribution Project

# Setup

- `npm install`
- Setup Geth to point to Rinkeby `geth --rinkeby --rpc --rpcapi db,eth,net,web3,personal --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*"  --keystore /Path/To/Keystore/ console`
- Redeploy Contract `truffle migrate --rinkeby`
- Update contract address on **line 111** with newly deployed contract address
- Send `approve` transaction to contract (approve contract owner to move tokens) Call this method from within Geth console
- Unlock Default Account on Rinkeby `web3.personal.unlockAccount(ContractAddress, Password, DurationInSeconds)`
- `npm start`
