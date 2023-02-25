import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as bcrypt from 'bcrypt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    }

  username: string = '';
  password: string = '';

  onSubmit(): void {
    // Generate a random salt value using bcrypt

    const salt = bcrypt.genSaltSync(10);

    // Hash the password with the salt using bcrypt
    const hashedPassword = bcrypt.hashSync(this.password, salt);

    // Save the username, hashed password, and salt in the database
    // You can use a backend API to do this using HTTP requests or a library like Mongoose
  }
}
