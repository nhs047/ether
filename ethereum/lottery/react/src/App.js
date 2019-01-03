import React, { Component } from 'react';
import './App.css';
 import web3 from './web3';
import lottery from './lottery';
class App extends Component {
  
  state = {
    manager:'',
    players: [],
    balance: '',
    value: '',
    message: ''
  }
 async componentDidMount(){

    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.playerList().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({ manager, players, balance });
  }
  onClick = async (event) => {
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    
    this.setState({message: "Waiting on transaction success"})
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({message: "A winner picked..."})
  }
  onSubmit = async (event) => {
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();
      this.setState({message: "Waiting on transaction success"})
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
      this.setState({message: "You have been entered"})
  }
  render() {

    // web3.eth.getAccounts().then((sss) =>{console.log(sss);}).catch(err => console.log(err));
   console.log(web3.version);
    
    return (
      <div>
        <h2>
          Lottery Contract
        </h2>
        <p>
          The Contract is hosted by {this.state.manager}
          There are currently {this.state.players.length} people entered
          competing to win {web3.utils.fromWei(this.state.balance)} ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>
            Want to try your luck???
          </h4>
          <div>
            <label>Amount of ether to enter</label>
            <input 
            value = { this.state.value }
            onChange={ event=>this.setState({ value: event.target.value })}
            />

          </div>
          <button>Enter</button>
        </form>
        <hr />
        <button onClick = {this.onClick}>Pick Winner</button>
        <hr />
        <div><h2>
          {this.state.message}
          </h2></div>
      </div>
    );
  }
}

export default App;
