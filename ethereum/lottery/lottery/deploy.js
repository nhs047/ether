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
    const inbox = await new web3.eth.Contract([
        {
          "constant": false,
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            },
            {
              "name": "",
              "type": "address"
            }
          ],
          "name": "beneficiary",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "admin",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "token",
          "outputs": [
            {
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "name": "_betaTokenAddr",
              "type": "address"
            },
            {
              "name": "_admin",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "payable": true,
          "stateMutability": "payable",
          "type": "fallback"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "DepositFunds",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "TransactionCreated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "DeletePendingTransaction",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "TransactionCompleted",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "by",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "TransactionSigned",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "LogTokenPayable",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "signatureCount",
              "type": "uint32"
            },
            {
              "indexed": false,
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "SignatureCount",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipRenounced",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_newAdmin",
              "type": "address"
            }
          ],
          "name": "setNewAdmin",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [],
          "name": "withdraw_ether",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw_token",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "to",
              "type": "address"
            },
            {
              "name": "amount",
              "type": "uint256"
            },
            {
              "name": "typeofTransaction",
              "type": "uint32"
            }
          ],
          "name": "transferToToken",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getPendingTransactions",
          "outputs": [
            {
              "name": "",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "sign_TransferToToken",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "transactionId",
              "type": "uint256"
            }
          ],
          "name": "deletePendingTransaction",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "walletBalance",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "walletBalanceOfToken",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "_from",
              "type": "address"
            },
            {
              "name": "_value",
              "type": "uint256"
            },
            {
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "tokenFallback",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "_who",
              "type": "address"
            },
            {
              "name": "_transactionId",
              "type": "uint256"
            }
          ],
          "name": "check_permitting",
          "outputs": [
            {
              "name": "",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ])
    .deploy({ data: '0x608060405234801561001057600080fd5b50604051604080611fc18339810180604052810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611eb1806101106000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063164fa4ef1461013757806333c88fc314610164578063715018a61461018f57806379061e96146101a65780638da5cb5b146101bd5780638eec99c81461021457806392ee399f1461025757806399c6d945146102bc5780639adf5e1114610321578063bfe91dc11461034e578063c0ee0b8a146103ab578063cd0a314b1461043e578063d11db83f14610469578063e1d41859146104d5578063f2fde38b14610502578063f851a44014610545578063fc0c546a1461059c575b343373ffffffffffffffffffffffffffffffffffffffff167fd241e73300212f6df233a8e6d3146b88a9d4964e06621d54b5ff6afeba7b1b8860405160405180910390a3005b34801561014357600080fd5b50610162600480360381019080803590602001909291905050506105f3565b005b34801561017057600080fd5b50610179610773565b6040518082815260200191505060405180910390f35b34801561019b57600080fd5b506101a4610872565b005b3480156101b257600080fd5b506101bb610974565b005b3480156101c957600080fd5b506101d2610a50565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022057600080fd5b50610255600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a75565b005b34801561026357600080fd5b506102a260048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b3b565b604051808215151515815260200191505060405180910390f35b3480156102c857600080fd5b50610307600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b6a565b604051808215151515815260200191505060405180910390f35b34801561032d57600080fd5b5061034c60048036038101908080359060200190929190505050610c88565b005b34801561035a57600080fd5b506103a9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803563ffffffff169060200190929190505050610f55565b005b3480156103b757600080fd5b5061043c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611444565b005b34801561044a57600080fd5b50610453611521565b6040518082815260200191505060405180910390f35b34801561047557600080fd5b5061047e611540565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104c15780820151818401526020810190506104a6565b505050509050019250505060405180910390f35b3480156104e157600080fd5b5061050060048036038101908080359060200190929190505050611598565b005b34801561050e57600080fd5b50610543600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bf0565b005b34801561055157600080fd5b5061055a611c57565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105a857600080fd5b506105b1611c7d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064e57600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561073457600080fd5b505af1158015610748573d6000803e3d6000fd5b505050506040513d602081101561075e57600080fd5b81019080805190602001909291905050505050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561083257600080fd5b505af1158015610846573d6000803e3d6000fd5b505050506040513d602081101561085c57600080fd5b8101908080519060200190929190505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108cd57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109cf57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610a4d573d6000803e3d6000fd5b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ad157600080fd5b60008173ffffffffffffffffffffffffffffffffffffffff1614151515610af757600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610c145750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80610c805750600115156003600084815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b905092915050565b600080826000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610d345750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80610da05750600115156003600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b1515610dab57600080fd5b60009250600091505b600780549050821015610e43578263ffffffff1660011415610e0f57600782815481101515610ddf57fe5b9060005260206000200154600760018403815481101515610dfc57fe5b9060005260206000200181905550610e36565b600782815481101515610e1e57fe5b9060005260206000200154841415610e3557600192505b5b8180600101925050610db4565b6007600160078054905003815481101515610e5a57fe5b90600052602060002001600090556007805480919060019003610e7d9190611dcc565b5060066000858152602001908152602001600020600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090556003820160006101000a81549063ffffffff02191690556003820160046101000a81549063ffffffff021916905550507f2bfde7cd384e0f6edc88a952d9cdcc575ec829ed993b942ea66611589a736d8f846040518082815260200191505060405180910390a150505050565b6000610f5f611df8565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806110075750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561101257600080fd5b83600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156110d057600080fd5b505af11580156110e4573d6000803e3d6000fd5b505050506040513d60208110156110fa57600080fd5b81019080805190602001909291905050501015151561111857600080fd5b6005600081548092919060010191905055915033816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050838160400181815250506000816080019063ffffffff16908163ffffffff16815250506111cd8363ffffffff16611ca3565b816060019063ffffffff16908163ffffffff1681525050806006600084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015560608201518160030160006101000a81548163ffffffff021916908363ffffffff16021790555060808201518160030160046101000a81548163ffffffff021916908363ffffffff160217905550905050600782908060018154018082558091505090600182039060005260206000200160009091929091909150555060016003600084815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061137e611540565b5061138882611598565b838573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f41d8c89c4a25824354aa1f198d80d06f2f93f903a2d180d1ea20429a4678c4a4856040518082815260200191505060405180910390a47f625212b4c303272b2f8a76a93a51baf825c654bead5286b314d887da8cec3d6d816080015183604051808363ffffffff1663ffffffff1681526020018281526020019250505060405180910390a15050505050565b7fc6ac3670246e61dde5b65f2aa41f8b4d68544b7e714e2c5a9dba8ae915922e76838383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156114e05780820151818401526020810190506114c5565b50505050905090810190601f16801561150d5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b6060600780548060200260200160405190810160405280929190818152602001828054801561158e57602002820191906000526020600020905b81548152602001906001019080831161157a575b5050505050905090565b6000816000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806116435750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806116af5750600115156003600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515145b15156116ba57600080fd5b6006600084815260200190815260200160002091508160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660001415151561171957600080fd5b60008260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900463ffffffff1663ffffffff1614151561177f57600080fd5b60018260040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548163ffffffff021916908363ffffffff16021790555081600301600481819054906101000a900463ffffffff168092919060010191906101000a81548163ffffffff021916908363ffffffff16021790555050823373ffffffffffffffffffffffffffffffffffffffff167fac63e7e1dc16bccf900879686e74ca33eeb175b670e3aaa9d7e4ccf3781b7a7a60405160405180910390a37f625212b4c303272b2f8a76a93a51baf825c654bead5286b314d887da8cec3d6d8260030160049054906101000a900463ffffffff1684604051808363ffffffff1663ffffffff1681526020018281526020019250505060405180910390a18160030160009054906101000a900463ffffffff1663ffffffff168260030160049054906101000a900463ffffffff1663ffffffff161415611beb578160020154600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156119be57600080fd5b505af11580156119d2573d6000803e3d6000fd5b505050506040513d60208110156119e857600080fd5b810190808051906020019092919050505010151515611a0657600080fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600201546040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611af357600080fd5b505af1158015611b07573d6000803e3d6000fd5b505050506040513d6020811015611b1d57600080fd5b81019080805190602001909291905050505081600201548260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f394c4e679790fab24fd86614fd812811c9c835e4c475bdfc3d26fd0d6f7ca6fd866040518082815260200191505060405180910390a4611bea83610c88565b5b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c4b57600080fd5b611c5481611cd2565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080821415611cb65760029050611ccd565b6001821415611cc85760039050611ccd565b600290505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611d0e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b815481835581811115611df357818360005260206000209182019101611df29190611e60565b5b505050565b60a060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600063ffffffff168152602001600063ffffffff1681525090565b611e8291905b80821115611e7e576000816000905550600101611e66565b5090565b905600a165627a7a723058206e460608ca9dccdb750da5a3cb4ef58becd263f948d18ef05661d3d751157cb00029' })
    .send({from: accounts[0], gas: '1000000'})
    console.log(interface);
    console.log('contract address: ', inbox.options.address);
}

deploy();