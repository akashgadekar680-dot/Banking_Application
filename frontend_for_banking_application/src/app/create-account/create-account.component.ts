import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  account: Account = new Account();
  accountCreate = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  onSubmit() {
    this.saveAccount();
  }

  saveAccount() {

    // Prevent id=0 issue
    this.account.id = undefined;

    this.accountService.createAccount(this.account).subscribe({
      next: (data) => {
        console.log('Account Created Successfully', data);

        this.accountCreate = true;

        // Navigate after 2 seconds
        setTimeout(() => {
          this.goToAccountList();
        }, 2000);

      },
      error: (error) => {
        console.error('Error Creating Account', error);
      }
    });
  }

  goToAccountList() {
    this.router.navigate(['/accounts']);
  }

}