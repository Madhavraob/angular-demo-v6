import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUserName: string;
  @Output() dummmy: EventEmitter<any> = new EventEmitter();

  user: any;

  /*[{ name: 'madhav', city: 'hyd', role: 'admin' },
  { name: 'jagadish', city: 'us', role: 'usr' },
  { name: 'manoj', city: 'us', role: 'usr' }];*/


  constructor(private _router: Router, private _activatedRouter: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {

         this._activatedRouter.params.subscribe((params: Params) => {
          this.currentUserName =params['username'];
          this._userService.getUserById(this.currentUserName).subscribe(res =>{ 
            this.user = res;
            console.log(res);
          } )


    })
  }

  dealList() {
    this._router.navigate(['/directives']);
    // this.dummmy.emit('this.currentUserName');
  }

}

