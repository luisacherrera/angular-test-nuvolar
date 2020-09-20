import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listed-element',
  templateUrl: './listed-element.component.html',
  styleUrls: ['./listed-element.component.scss']
})
export class ListedElementComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit(): void {
  }

}
