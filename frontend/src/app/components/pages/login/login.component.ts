import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
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

  submit() {
    // Generate a random salt value using bcrypt

    const encryptedUsername = CryptoJS.AES.encrypt(this.username, 'secret key');
    const encryptedPassword = CryptoJS.AES.encrypt(this.password, 'secret key');

    console.log(encryptedPassword)
    // Save the username, hashed password, and salt in the database
    // You can use a backend API to do this using HTTP requests or a library like Mongoose
  }
}
