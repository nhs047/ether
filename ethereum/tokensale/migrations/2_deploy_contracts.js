var BetaToken = artifacts.require("./BetaToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BetaToken, 1000000);
};