import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgForm } from "@angular/forms";
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      taiKhoan: new FormControl("", [Validators.required]),
      matKhau: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.auth.login(this.loginForm.value).subscribe({
            complete: ()=>{
        this.router.navigate(['/'])
      }
    })
  }
}
