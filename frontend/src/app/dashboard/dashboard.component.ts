import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FarmerService} from '../farmer.service'
import {MatSnackBar} from '@angular/material/snack-bar';

declare let require: any;
const farmer_artifacts = require('../../../../build/contracts/Farmer.json');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts: string[];
  farmer_contract: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };

  status = '';

  constructor(private router: Router, private web3Service: FarmerService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(farmer_artifacts)
      .then((farmerAbstraction) => {
        this.farmer_contract = farmerAbstraction;
        this.farmer_contract.deployed().then(deployed => {
          console.log(deployed);
          deployed.Transfer({}, (err, ev) => {
            console.log('Transfer event came in, refreshing balance');
            this.refreshBalance();
          });
        });

      });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  async register() {
    if (!this.farmer_contract) {
      this.setStatus('faarmer is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;
    const receiver = this.model.receiver;
    const person = this.model.account;

    //console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedfarmer_contract = await this.farmer_contract.deployed();
      const transaction = await deployedfarmer_contract.addFarmer.sendTransaction(person, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedfarmer_contract = await this.farmer_contract.deployed();
      console.log(deployedfarmer_contract);
      console.log('Account', this.model.account);
      const balance = await deployedfarmer_contract.getBalance.call(this.model.account);
      console.log('Found balance: ' + balance);
      this.model.balance = balance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.model.receiver = e.target.value;
  }

  go_to_order_scheduling() {
    this.router.navigate(['/order-schedule']);
  }

  show_my_orders(){
    this.router.navigate(['/my-orders']);
  }

  go_to_shop(){
    this.router.navigate(['/shop']);
  }
}
