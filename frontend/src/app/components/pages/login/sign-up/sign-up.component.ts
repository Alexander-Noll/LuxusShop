import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private user : UserService) { }

  ngOnInit(): void {
  }


  signUpForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    confirmPassword : new FormControl(),
    areacode : new FormControl(),
    lastName : new FormControl(),
    address : new FormControl(),
    number : new FormControl(),
    email : new FormControl(),
  });

  submit(){

    const formData = {
      name: this.signUpForm.value.name,
      password: this.signUpForm.value.password,
      areacode: this.signUpForm.value.areacode,
      lastName: this.signUpForm.value.lastName,
      address: this.signUpForm.value.address,
      number: this.signUpForm.value.number,
      email: this.signUpForm.value.email
    };
    console.log("yo")
    this.user.createUser(formData)
  }
}
