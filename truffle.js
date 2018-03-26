module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 4000000,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0xf952570dbbeb5ced1d9885f2b5649f42d2b606d6",
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  },
migrations_directory:'migrations'
};


