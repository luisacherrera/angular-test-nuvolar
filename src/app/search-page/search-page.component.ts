import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  results : Array<Object> = [];

  constructor(
    private _userService : UserServiceService
  ) { }

  ngOnInit(): void {
  }

  getUsers(search: String) {
    this._userService.getUsers(search)
      .subscribe((response : Object)=>{
        this.results = response.items;
      });
  }

}
