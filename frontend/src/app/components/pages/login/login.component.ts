import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });


  async submit() {
    // Generate a random salt value using bcrypt
    const saltRounds = 10;
    const testP = "ApfelStrudel21$"
    console.log(this.loginForm.value.password,testP)
    const testHash = await bcrypt.hash("ApfelStrudel21$", saltRounds);
    const pHash = await bcrypt.hash("ApfelStrudel21$", saltRounds);

    bcrypt.compare("ApfelStrudel21$", testHash, function(err, result) {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("Match:", result);
      }
    });
    // Save the username, hashed password, and salt in the database
    // You can use a backend API to do this using HTTP requests or a library like Mongoose
  }
}
