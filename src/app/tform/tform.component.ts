import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  name: string = 'madhav';
  email: string = 'mad@mad.com';
  address: string = 'london';
  street: string = 'baker';
  city: string = 'london';
  postalcode: number = 12345;

  constructor() { }

  ngOnInit() {
  }
  myName = "Brandon";
  onSubmit(value: any) {
    console.log(value);
  }
  logit(hi){
console.log(this.myName);
  }
}
