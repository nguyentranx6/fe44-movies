import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  movieDetail: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: (param) => {
        this.movieService.getMovieDetail(param.id).subscribe({
          next: (result)=>{
            this.movieDetail = result;
          }
        })
      },
    });
  }
}
