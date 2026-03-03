import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:8080/api/accounts";

  constructor(private httpClient: HttpClient) { }

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl);
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(this.baseUrl, account);
  }

  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseUrl}/${id}`);
  }

  deposit(id: number, amount: number): Observable<Account> {
    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/deposit`, { amount });
  }

  withdraw(id: number, amount: number): Observable<Account> {
    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/withdraw`, { amount });
  }

delete(id: number): Observable<string> {
  return this.httpClient.delete(`${this.baseUrl}/${id}`, {
    responseType: 'text'
  });
}

}