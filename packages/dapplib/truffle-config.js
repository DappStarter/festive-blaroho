require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note meadow method include kitten bridge ghost'; 
let testAccounts = [
"0x8e894015dda7a7c7bc896fe80e15b547b00787be61cd20d53ec057d5c9e23efd",
"0x5c5092937dc1b7b7c14cd48d48ac0ad5d81ad740b0c09ddaa3caf31fc52de945",
"0x608405c44951b776cbc658f55e3d9215daa348118a2abee450cc00fff60c75a4",
"0x864563beadcbe6e0add701b471225b29503873d639e59dfefc3090d3c80ebc25",
"0x0fa1782219d2723c6266fc20a82c25b73244cd2eacfa29efb75aa8bfd1af3015",
"0xefb71931f6872b0d2c6d36bb1f0b311565faa06025c8ef46361891383d350044",
"0xd347a4d233281ae99880bdc3caec81aa75c66c211469619fbe3a37b08424f52e",
"0x873c82ae07cb21135fdad6d760055f8227c6eb5bffff96d5cd48b46597322d4e",
"0x5572a9a21f65a5d6ea1a4b59f8669e155aac421ee660755cc00aba4419bf314b",
"0x290000e40b4b784cd46f2a8bdb5c2a6342aefc789b31e714b1e68dfd18c3f80e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
