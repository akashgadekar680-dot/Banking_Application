import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];
  message: string = '';
  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  deposit(id: number): void {
    this.router.navigate(['/deposit', id]);
  }

  withdraw(id: number): void {
    this.router.navigate(['/withdraw', id]);
  }

delete(id: number): void {
  if (confirm("Are you sure you want to delete this account?")) {

    this.accountService.delete(id).subscribe(response => {
      
      this.message = response; // show backend message
      
      this.getAccounts(); // refresh table

      // Auto hide message after 3 seconds
      setTimeout(() => {
        this.message = '';
      }, 1000);

    });

  }
}

  view(id: number): void {
    this.router.navigate(['/account-detail', id]);
  }

}