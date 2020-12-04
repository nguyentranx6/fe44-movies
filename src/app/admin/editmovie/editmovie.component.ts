import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-editmovie",
  templateUrl: "./editmovie.component.html",
  styleUrls: ["./editmovie.component.css"],
})
export class EditmovieComponent implements OnInit {
  formEditMovies: FormGroup;

  constructor(
    public dialogMovieEditRef: MatDialogRef<EditmovieComponent>,
    @Inject(MAT_DIALOG_DATA) public movieEdit: any
  ) {
    this.formEditMovies = new FormGroup({
      tenPhim: new FormControl("", [Validators.required]),
      biDanh: new FormControl("", [Validators.required]),
      trailer: new FormControl("", [Validators.required]),
      hinhAnh: new FormControl("", [Validators.required]),
      moTa: new FormControl("", [Validators.required]),
      ngayKhoiChieu: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.setDefaultEditMovie();
  }

  editMovies() {
    console.log(this.formEditMovies.value);
  }

  uploadImage(evt) {
    this.formEditMovies.patchValue({ hinhAnh: evt.target.files[0] });
  }

  setDefaultEditMovie() {
    let editUser = {
      tenPhim: this.movieEdit.tenPhim,
      biDanh: this.movieEdit.biDanh,
      trailer: this.movieEdit.trailer,
      hinhAnh: this.movieEdit.hinhAnh,
      moTa: this.movieEdit.moTa,
      ngayKhoiChieu: this.movieEdit.ngayKhoiChieu,
    };
    this.formEditMovies.setValue(editUser);
  }
}
