import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as forge from 'node-forge';
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/signUp';
  private passphrase = 'my-secret-passphrase';
  private keySize = 256 / 8; // 256 bits
  private iterations = 100; // number of iterations to generate the key

  constructor(private http: HttpClient) {}

  async createUser(formData: any, email: string, password: string) {
    // Define a passphrase to use for encryption
    const passphrase = 'G;YfbXh.n::3U4!8K?Q=';

    // Generate a random salt to use for key derivation
    const salt = forge.random.getBytesSync(16);

    // Derive a 256-bit encryption key using PBKDF2 with the given passphrase and salt
    const key = forge.pkcs5.pbkdf2(passphrase, salt, 10000, 32);

    // Generate a random initialization vector (IV) to use for encryption
    const iv = forge.random.getBytesSync(16);

    // Create an AES-CBC cipher object with the derived key and random IV
    const cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({ iv: iv });

    // Update the cipher with the JSON-serialized form data
    cipher.update(forge.util.createBuffer(JSON.stringify(formData)));

    // Finalize the cipher and get the encrypted output
    cipher.finish();
    const encrypted = cipher.output;

    // Encode the salt, IV, and encrypted output as base64 strings and return as an object
    const encryptedData = {
      salt: forge.util.encode64(salt),
      iv: forge.util.encode64(iv),
      encrypted: forge.util.encode64(encrypted.getBytes()),
    };

    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

    // Convert the encrypted data to a string for storage or transmission

    const data = {
      password: hash,
      email: email,
      data: encryptedData,
    };

    await this.sendData(data);

  }

  async sendData(data :any){
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('ok');
    }
  }
  async Login() {
    const saltRounds = 10;
    const pHash = await bcrypt.hash('ApfelStrudel21$', saltRounds);
    bcrypt.compare('ApfelStrudel21$', pHash, function (err, result) {
      if (err) {
        console.log('Error:', err);
      } else {
        console.log('Match:', result);
      }
    });
  }

  async test() {
    const passphrase = 'G;YfbXh.n::3U4!8K?Q=';
    const data = { name: 'John', age: 30 };

    const salt = forge.random.getBytesSync(16);
    const key = forge.pkcs5.pbkdf2(passphrase, salt, 10000, 32);

    const iv = forge.random.getBytesSync(16);
    const cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(JSON.stringify(data)));
    cipher.finish();
    const encrypted = cipher.output;

    const encryptedData = {
      salt: forge.util.encode64(salt),
      iv: forge.util.encode64(iv),
      encrypted: forge.util.encode64(encrypted.getBytes()),
    };

    console.log(JSON.stringify(encryptedData));

    const encryptedData1 = JSON.parse(JSON.stringify(encryptedData));
    const salt1 = forge.util.decode64(encryptedData.salt);
    const iv1 = forge.util.decode64(encryptedData.iv);
    const encrypted1 = forge.util.decode64(encryptedData.encrypted);

    const key1 = forge.pkcs5.pbkdf2(passphrase, salt1, 10000, 32);
    const decipher = forge.cipher.createDecipher('AES-CBC', key);
    decipher.start({ iv: iv1 });
    decipher.update(forge.util.createBuffer(encrypted1));
    decipher.finish();
    const decrypted = JSON.parse(decipher.output.toString());

    console.log(decrypted);
  }
}
