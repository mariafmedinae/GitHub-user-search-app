import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http: HttpClient) { }

  getUser(username: string = "octocat") {
    return this.http.get<USER>(`https://api.github.com/users/${username}`);
  }
}
