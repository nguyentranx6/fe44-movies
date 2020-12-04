import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {DialogContentComponent} from '../../shared/dialog-content/dialog-content.component';

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.css"],
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.registerForm = new FormGroup({
      taiKhoan: new FormControl("", [Validators.required]),
      matKhau: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      soDt: new FormControl("", [Validators.required]),
      maLoaiNguoiDung: new FormControl("", [Validators.required]),
      hoTen: new FormControl("", [Validators.required]),
      maNhom: new FormControl("", [Validators.required]),
    });
  }

  list: any = [
    { value: "QuanTri", viewValue: "Giáo viên" },
    { value: "KhachHang", viewValue: "Khách Hàng" },
  ];
  ngOnInit(): void {}


  handleRegister() {
    console.log(this.registerForm.value);
    this.userService.addNewUser(this.registerForm.value).subscribe({
      complete: () => {
        this.resetFormAddUser();
        this.router.navigate(["admin/users"]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  resetFormAddUser() {
    this.registerForm.reset()
  }
}
