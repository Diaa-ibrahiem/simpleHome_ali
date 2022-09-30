import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _route: Router,
  ) {

  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.form = this._fb.group({
      username: this._fb.control(null, Validators.required),
      password: this._fb.control(null, Validators.required),
    })
  }


  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      if (String(this.form.get('username')?.value).toLocaleLowerCase() === 'admin' &&
        String(this.form.get('password')?.value).toLocaleLowerCase() === 'admin') {
        localStorage.setItem('user', String(this.form.get('username')?.value).toLocaleLowerCase())
        localStorage.setItem('password', String(this.form.get('password')?.value).toLocaleLowerCase())
        this._route.navigate(['/home']);
      }else {
        alert("Invalid Authontication");
      }
    }
  }
}
