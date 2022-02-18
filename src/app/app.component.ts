import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from './github-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private githubUsers: GithubUsersService) {}

  ngOnInit() {
    this.githubUsers.getUser().subscribe(
      (data) => {console.log(data);}
    )
  }
}
