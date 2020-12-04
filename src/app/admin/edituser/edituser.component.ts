import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  editUserForm: FormGroup;
  constructor(public dialogUserEditRef: MatDialogRef<EdituserComponent>,
              @Inject(MAT_DIALOG_DATA) public userEdit: any) {
    this.editUserForm = new FormGroup({
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

  ngOnInit(): void {
    this.setDefaultEditUser();
  }
  setDefaultEditUser(){
    let editUser = {
      taiKhoan: this.userEdit.taiKhoan,
      matKhau: this.userEdit.matKhau,
      email: this.userEdit.email,
      soDt: this.userEdit.soDt || this.userEdit.soDT,
      maLoaiNguoiDung: this.userEdit.maLoaiNguoiDung || null,
      hoTen: this.userEdit.hoTen,
      maNhom: 'GP01',
    }
    this.editUserForm.setValue(editUser)
  }

  handleSubmitEditUser(editUserForm: FormGroup) {
    console.log(editUserForm.value);
  }
}
