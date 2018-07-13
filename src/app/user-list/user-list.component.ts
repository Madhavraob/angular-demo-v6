import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  applyBaground: boolean = true;

  useList: Array<any>;
  //  = [{ name: 'madhav', city: 'hyd', role: 'admin' },
  // { name: 'jagadish', city: 'us', role: 'usr' },
  // { name: 'manoj', city: 'us', role: 'usr' }];

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(userData => {
      this.useList = userData;
    })
  }

}
