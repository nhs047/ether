const BetaToken = artifacts.require('./BetaToken.sol');

contract('BetaToken', (accounts) => {
    
    let tokenInstance;
    it('Initialize the token with correct value', () => {
        return BetaToken.deployed().then(i => {
            tokenInstance = i;
            return tokenInstance.name()
        })
        .then((name) => {
            assert.equal(name, "Beta Token", "has a correct name");
            return tokenInstance.symbol()
        })
        .then(symbol => {
            assert.equal(symbol, "-_-", 'has a correct symbol');
            return tokenInstance.standard()
        })
        .then(standard => {
            assert.equal(standard, "version 1.1");
            return tokenInstance.totalSupply();
        })
        .then(totalSupply => {
            console.log(totalSupply.toNumber());
        })
    })
    // it('Initialize the total supply upon deployment', () => {
    //     return BetaToken.deployed().then(i => {
    //         tokenInstance = i;
    //         return i.totalSupply();
    //     })
    //     .then(ts => {
    //         assert.equal(ts.toNumber(), 1000000, 'sets the total supply to 1000000');
    //         return tokenInstance.balanceOf(accounts[0])
    //     })
    //     .then(result => {
    //         assert.equal(result.toNumber(),1000000, 'sets the total supply to the account')
    //     })
    // })
    // it('Transfer to token', () => {
    //     return BetaToken.deployed().then(i => {
    //         tokenInstance = i;
    //         return i.transfer.call(accounts[1], 99999999999999);
    //     })
    //     .then(assert.fail).catch(err => {
    //         assert(err.message.indexOf('revert') >= 0, 'error must contain revert');
    //         return tokenInstance.transfer.call(accounts[1], 250000,{ from: accounts[0] })
    //     })
    //     .then(success => {
    //         assert.equal(success, true, "this returns true");
    //         return tokenInstance.transfer(accounts[1], 250000,{ from: accounts[0] })
    //     })
    //     .then(receipt => {
    //         assert.equal(receipt.logs.length, 1, "length should be 1");
    //         assert.equal(receipt.logs[0].event,'Transfer', "Event should be Transfer");
    //         assert.equal(receipt.logs[0].args._from, accounts[0], `Event should hitted by ${accounts[0]}`);
    //         assert.equal(receipt.logs[0].args._to, accounts[1], `Event should transferred to ${accounts[1]}`);
    //         assert.equal(receipt.logs[0].args._value, 250000, 'Event should transferred 250000');
    //         return tokenInstance.balanceOf(accounts[1])
    //     })
    //     .then(result => {
    //         console.log("sender", result.toNumber());
    //         assert.equal(result.toNumber(), 250000, "adds the amount to the receiving account");
    //         return tokenInstance.balanceOf(accounts[0])
    //     })
    //     .then(result => {
    //         console.log("receiver", result.toNumber());
    //         assert.equal(result.toNumber(), 750000, "now the amount to the sending account");
    //     })
    // })
    //    it('Transfer to token', () => {
    //     return BetaToken.deployed().then(i => {
    //         tokenInstance = i;
    //         return i.balanceOf(accounts[1])
    //     })
    //     .then(result => {
    //         console.log(result.toNumber());
    //         return tokenInstance.transfer(accounts[1], 250000,{ from: accounts[0] })
    //     })
    //     // .then(assert.fail).catch(err => {
    //     //     assert(err.message.indexOf('revert') >= 0, 'error must contain revert');
    //     //     return tokenInstance.transfer.call(accounts[1], 250000,{ from: accounts[0] })
    //     // })
    //     .then(success => {
    //         return tokenInstance.balanceOf(accounts[1])
    //     })
    //     .then(result =>{
    //         console.log(result.toNumber());
    //         return tokenInstance.balanceOf(accounts[0])
    //     })
    //     .then(result =>{
    //         console.log(result.toNumber());
    //         return tokenInstance.approve.call(accounts[1], 250000);
    //     })
    //     .then(result =>{
    //         return tokenInstance.transfer(accounts[2], 250000,{ from: accounts[1] })
    //     })
    //     .then(result => {
    //         return tokenInstance.balanceOf(accounts[1])
    //     })
    //     .then(result => {
    //         console.log(result.toNumber());
    //         return tokenInstance.balanceOf(accounts[2])
    //     })
    //     .then(result => {
    //         console.log(result.toNumber());
    //         return tokenInstance.balanceOf(accounts[2])
    //     })
        // .then(receipt => {
        //     assert.equal(receipt.logs.length, 1, "length should be 1");
        //     assert.equal(receipt.logs[0].event,'Transfer', "Event should be Transfer");
        //     assert.equal(receipt.logs[0].args._from, accounts[0], `Event should hitted by ${accounts[0]}`);
        //     assert.equal(receipt.logs[0].args._to, accounts[1], `Event should transferred to ${accounts[1]}`);
        //     assert.equal(receipt.logs[0].args._value, 250000, 'Event should transferred 250000');
        //     return tokenInstance.balanceOf(accounts[1])
        // })
        // .then(result => {
        //     console.log("sender", result.toNumber());
        //     assert.equal(result.toNumber(), 250000, "adds the amount to the receiving account");
        //     return tokenInstance.balanceOf(accounts[0])
        // })
        // .then(result => {
        //     console.log("receiver", result.toNumber());
        //     assert.equal(result.toNumber(), 750000, "now the amount to the sending account");
        // })
    // })
})