import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  id: number = 0;
  account: Account = new Account();

  withdrawAmount: number = 0;   // ✅ separate variable

  successMessage: string = "";
  errorMessage: string = "";

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.accountService.getAccountById(this.id).subscribe(data => {
      this.account = data;
    });
  }

  onSubmit(): void {

    // ❌ Invalid Amount
    if (this.withdrawAmount <= 0 || this.withdrawAmount >= 10000000) {
      this.errorMessage = "Invalid Amount! Please enter valid amount.";
      this.successMessage = "";

      setTimeout(() => {
        this.errorMessage = "";
      }, 1000);
      return;
    }

    // ❌ Insufficient Balance
    if (this.withdrawAmount > this.account.balance) {
      this.errorMessage = "Insufficient Balance!";
      this.successMessage = "";

      setTimeout(() => {
        this.errorMessage = "";
      }, 1000);
      return;
    }

    // ✅ Withdraw API Call
    this.accountService.withdraw(this.id, this.withdrawAmount).subscribe({
      next: (data) => {
        this.successMessage = "Withdraw Successfully...!";
        this.errorMessage = "";

        setTimeout(() => {
          this.router.navigate(['/accounts']);
        }, 1000);
      },
      error: () => {
        this.errorMessage = "Something went wrong!";
        this.successMessage = "";
      }
    });
  }

}