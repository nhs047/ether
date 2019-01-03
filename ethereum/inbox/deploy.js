const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
'damage length tone chair embody unit razor steak magic design super umbrella',
'https://rinkeby.infura.io/v3/7e15ae1ae9464431bf5e87940787c971'
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('contract deployed from ', accounts[0]);
    const inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x'+bytecode, arguments: ['Hi there!']})
    .send({from: accounts[0], gas: '1000000'})
    console.log('contract address: ', inbox.options.address);
}

deploy();