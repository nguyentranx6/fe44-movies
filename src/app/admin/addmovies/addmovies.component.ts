import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MoviesService } from "../../../services/movies.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-addmovies",
  templateUrl: "./addmovies.component.html",
  styleUrls: ["./addmovies.component.css"],
})
export class AddmoviesComponent implements OnInit {
  formAddMovies: FormGroup;

  constructor(private movieService: MoviesService, private router: Router) {
    this.formAddMovies = new FormGroup({
      tenPhim: new FormControl("", [Validators.required]),
      biDanh: new FormControl("", [Validators.required]),
      trailer: new FormControl("", [Validators.required]),
      hinhAnh: new FormControl("", [Validators.required]),
      moTa: new FormControl("", [Validators.required]),
      danhGia: new FormControl("", [Validators.required]),
      ngayKhoiChieu: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  addMovies() {
    this.movieService.addMovies(this.formAddMovies.value).subscribe({
      complete: () => {
        console.log("Add movie success!");
        this.router.navigate(["admin/movies"]);
      },
    });
  }

  uploadImage(evt) {
    this.formAddMovies.patchValue({ hinhAnh: evt.target.files[0] });
  }
}
