import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {


  private apiUrl = 'http://localhost:3000/signUp';

  constructor(private http: HttpClient) { }

 async createUser(formData: any) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(formData.password, saltRounds);
  formData.password = hash;



    console.log(formData)
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log("ok")
    }
  }
 async Login(){
  const saltRounds = 10;
    const pHash = await bcrypt.hash("ApfelStrudel21$", saltRounds);
    bcrypt.compare("ApfelStrudel21$", pHash, function(err, result) {
      if (err) {
        console.log("Error:", err);
      } else {
        console.log("Match:", result);
      }
    });
   }
}
