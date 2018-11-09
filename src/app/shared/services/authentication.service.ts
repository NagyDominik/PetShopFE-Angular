import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiURL = 'https://petshopapp-domi0766-easv.azurewebsites.net/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiURL + 'login', { username, password })
      .pipe(map(response => {
        const token = response && response.token;
        if (token) {
          localStorage.setItem('PetShopUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          return false;
        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('PetShopUser'));
    return currentUser && currentUser.token;
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('PetShopUser'));
    return currentUser && currentUser.username;
  }

  logout(): void {
    localStorage.removeItem('PetShopUser');
  }
}
