import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { DialogContentComponent } from "../../shared/dialog-content/dialog-content.component";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
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
    });
  }

  ngOnInit(): void {}
  openDialog(value) {
    const dialogRef = this.dialog.open(DialogContentComponent, { data: value });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result === true){
        this.router.navigate(['/home/login'])
      }
      else if(result === false){
        this.router.navigate(['/'])
      }
    })
  }
  handleRegister() {
        this.auth.register(this.registerForm.value).subscribe({
      next: (result) => {
      },
      complete: () => {
        this.openDialog(this.registerForm.value);
      },
    });
  }
}
