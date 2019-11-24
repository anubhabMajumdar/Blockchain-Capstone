// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const fs = require('fs');

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier)
  .then(() => {
    deployer.deploy(SolnSquareVerifier, SquareVerifier.address)
    .then(() => {
      let config = {
        localhost: {
            url: 'http://localhost:7545',
            verifierAddress: SquareVerifier.address,
            solnVerifierAddress: SolnSquareVerifier.address
        }
    }
    fs.writeFileSync(__dirname + '/../test/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
    // fs.writeFileSync(__dirname + '/../src/server/config.json',JSON.stringify(config, null, '\t'), 'utf-8');
    })
  })
};
