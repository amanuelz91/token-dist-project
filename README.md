### Token Distribution Project

# Setup

- `npm install`
- Redeploy Contract (Abi in `abi/TokensoftToken-abi.js`) (I used truffle)
- Update contract address on **line 111** with newly deployed contract address
- Unlock Default Account on Rinkeby `web3.personal.unlockAccount(ContractAddress, Password, DurationInSeconds)`
- Send `approve` transaction to contract (approve contract owner to move tokens)
