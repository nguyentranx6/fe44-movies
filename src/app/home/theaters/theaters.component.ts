import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-theaters",
  templateUrl: "./theaters.component.html",
  styleUrls: ["./theaters.component.css"],
})
export class TheatersComponent implements OnInit {
  showTime: any;
  constructor(
    private movieService: MoviesService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: (param) => {
        this.movieService.getShowtimeDetail(param.id).subscribe({
          next: (result) => {
            this.showTime = result;
          },
        });
      },
    });
  }
}
