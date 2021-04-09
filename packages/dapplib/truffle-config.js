require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'jazz argue opera food grocery cruise oval unlock inside light army giant'; 
let testAccounts = [
"0x034378892e8879ee135a915a3e0928fe5566c501ec618738a27074fca213e9b6",
"0xa929eae224ce443aaa0ade5ec84aaf74408b695afd738f1ace943007638679a6",
"0x00f882f7f0d43d79f762944b9bdc6ffafb60413934dc29f7af90b772bbe68951",
"0xa8b3b87de3be7919ce43bda02e9e6ac0088fa46336ec49f2ace9e904906d49cb",
"0x687c19e14084d05478f5bc6902bc4c57147f8c7d5682d35f848515c9d55bfda8",
"0x0608ca8d491181071cf54b4c03e24de1b47ccb367552c110494bbda0235124f6",
"0xdce019e18fc005fa7190379885251dfe51cd5dce8ab9e0122c03165cbb43af77",
"0x726bc733c02ef644c4a62fa4abce41033c2638fb87c7db0debb3f63fecaa1566",
"0xc4875fee46a0c08a6b37eaf4cea6a8fad59a26333e0396a2975c1d3cf2499b6c",
"0x1b365750af2c3f4f73d4c08bf5fdbc6a8ea44f75f980e6c163ef10dc73584e49"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

