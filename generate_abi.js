// generate-abi.js
const fs = require('fs');
const CryptoZombies = artifacts.require("CryptoZombies");

module.exports = async function(callback) {
  try {
    // Get the contract artifact
    const contract = await CryptoZombies.deployed();
    
    // Create the ABI variable definition
    const abiString = `var cryptoZombiesABI = ${JSON.stringify(CryptoZombies.abi, null, 2)};`;
    
    // Create contract address variable
    const addressString = `var cryptoZombiesAddress = "${contract.address}";`;
    
    // Write to a file
    fs.writeFileSync('cryptozombies_abi.js', abiString + '\n\n' + addressString);
    console.log('ABI file generated successfully!');
    console.log(`Contract deployed at: ${contract.address}`);
    
    callback();
  } catch(error) {
    console.error(error);
    callback(error);
  }
};