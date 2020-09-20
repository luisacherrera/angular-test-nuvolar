import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { forkJoin } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  id : string;
  user: User;
  followers: any;
  repositories: any;

  constructor(
    private _userService : UserServiceService,
    private _route : ActivatedRoute
  ) { 
    this.id = this._route.snapshot.params.id;
    
    const userObservable = forkJoin({
      userInfo: this._userService.getSingleUser(this.id),
      userFollowers: this._userService.getUserFollowers(this.id),
      userRepos: this._userService.getUserRepos(this.id)
    })

    userObservable.subscribe({
      next: (value: any) => {
        this.user = new User(
          value.userInfo.login,
          value.userInfo.html_url,
          value.userInfo.name,
          value.userInfo.avatar_url,
          value.userInfo.email,
          value.userInfo.bio
        );

        this.followers = value.userFollowers; 
        this.repositories = value.userRepos;
      }
    })
  }

  ngOnInit(): void {
  }
}
