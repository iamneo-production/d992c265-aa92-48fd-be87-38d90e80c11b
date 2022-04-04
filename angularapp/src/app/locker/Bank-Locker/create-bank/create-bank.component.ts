import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent implements OnInit {
  hide=true;
  bank: Bank = new Bank();
  constructor(private bankService: BankService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.bankService.createBank(this.bank).subscribe( data =>{
      console.log(data);
      this.goToBankList();
    },
    error => console.log(error));
  }

  goToBankList(){
    this.router.navigate(['/bank-list']);
  }
  
  onSubmit(){
    console.log(this.bank);
    this.saveEmployee();
  }
}
