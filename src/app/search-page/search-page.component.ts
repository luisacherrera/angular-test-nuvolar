import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  results : Array<Object> = [];
  errorMessage: boolean = false;
  noResults: boolean = false;

  constructor(
    private _userService : UserServiceService
  ) { }

  ngOnInit(): void {
  }

  getUsers(search: String) {
    this._userService.getUsers(search)
      .subscribe({
        next: (response : any)=>{
          this.results = response.items;
          this.noResults = this.results.length > 0 ? false : true;
          this.errorMessage = false;
        },
        error: (err) => {
          this.errorMessage = true;
          this.noResults = false;
          console.error(err);
        }
      });
  }

}
