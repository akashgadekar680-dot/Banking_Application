import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  id: number = 0;
  account: Account = new Account();

  depositAmount: number = 0;   // ✅ separate variable

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

    if (this.depositAmount <= 0 || this.depositAmount >= 10000000) {

      this.errorMessage = "Invalid Amount... Please Enter Valid Amount!";
      this.successMessage = "";

      setTimeout(() => {
        this.errorMessage = "";
      }, 1000);

      return;   // ✅ stop execution
    }

    this.accountService.deposit(this.id, this.depositAmount).subscribe({
      next: () => {
        this.successMessage = "Deposit Successfully...!";
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