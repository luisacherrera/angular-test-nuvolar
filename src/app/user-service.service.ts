import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userInfoUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.userInfoUrl = 'https://api.github.com/users/'
  }

  getUsers(query) {
    return this.http.get(`https://api.github.com/search/users?q=${query}+in:login`);
  }

  getSingleUser(user) {
    return this.http.get(`${this.userInfoUrl + user}`);
  }

  getUserFollowers(user) {
    return this.http.get(`${this.userInfoUrl + user}/followers`);
  }

  getUserRepos(user) {
    return this.http.get(`${this.userInfoUrl + user}/repos`);
  }
}
