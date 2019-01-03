const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let fetchedAccounts;
let inbox;


beforeEach(async () => {
    fetchedAccounts = await web3.eth.getAccounts()
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({from: fetchedAccounts[0], gas: '1000000'})
})

describe('Inbox', () => {
    it('deploy a contract', () => {
        assert.ok(inbox.options.address)
    })
    it('has a default message', async () => {
        assert.equal(await inbox.methods.message().call(), 'Hi there!')
    })
    it('modify data of a contract', async () => {
        await inbox.methods.setMessage('bye there!').send({ from: fetchedAccounts[0]})
        assert.equal(await inbox.methods.message().call(), 'bye there!')
    })
})