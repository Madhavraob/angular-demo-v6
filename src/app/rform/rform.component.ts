import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { };

  ngOnInit() {
    this.userForm = new FormGroup(
      {
        name: new FormControl('Brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]),
        email: new FormControl(),
        address: new FormGroup(
          {
            street: new FormControl(),
            city: new FormControl(),
            postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
          }
        )
      }
    );

  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  // this.userForm = this._formBuilder.group({
  //   name: ['Brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(9)]],
  //   email: [],
  //   address: this._formBuilder.group({
  //     street: [],
  //     city: [],
  //     postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')]]
  //   })
  // })

}
