import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id: number = 0;
  account: Account = new Account();

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

  goBack(): void {
    this.router.navigate(['/accounts']); // Goes back to original list page
  }
}