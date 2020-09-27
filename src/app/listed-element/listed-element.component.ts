import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listed-element',
  templateUrl: './listed-element.component.html',
  styleUrls: ['./listed-element.component.scss']
})
export class ListedElementComponent implements OnInit {
  @Input() user: any;
  path : boolean;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.path = !this._route.snapshot.params.id;
  }

}
