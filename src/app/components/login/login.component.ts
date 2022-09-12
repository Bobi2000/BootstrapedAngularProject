import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(250)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    console.log('login');
  }
}
