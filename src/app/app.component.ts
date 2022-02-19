import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from './github-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: USER = {
    avatar_url: "",
    name: "",
    login: "",
    created_at: "",
    bio: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "",
    blog: "",
    company: "",
    twitter_username: "",
  };
  
  message = "";

  constructor(private githubUsers: GithubUsersService) {}

  ngOnInit() {
    this.githubUsers.getUser().subscribe(
      (data:USER) => {
        this.user = data
      },
      (error) => {this.message = "No results";}
    )
  }
}

export interface USER {
  avatar_url: string;
  name: string;
  login: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  twitter_username: string;  
}
