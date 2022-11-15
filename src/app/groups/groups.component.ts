import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  pageTitle = 'WC 2022 Groups';

  constructor() { }

  ngOnInit(): void {
  }

}
