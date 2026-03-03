import { Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

export const routes: Routes = [

  // Default Route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Home
  {
    path: 'home',
    component: HomeComponent
  },

  // Account List
  {
    path: 'accounts',
    component: AccountListComponent
  },

  // Create Account
  {
    path: 'create-account',
    component: CreateAccountComponent
  },

  // Deposit with ID
  {
    path: 'deposit/:id',
    component: DepositComponent
  },

  {
    path: 'withdraw/:id',
    component: WithdrawComponent
  },

    {
    path: 'account-detail/:id',
    component: AccountDetailsComponent
  },


  // Wildcard Route (if wrong URL)
  {
    path: '**',
    redirectTo: 'home'
  }

];