import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log("process.env['npm_package_name']",process.env['npm_pack  age_name'])
  }

}
