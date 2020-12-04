import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";
import {MoviesStore} from '../../../services/movies.store';
import {Observable} from 'rxjs';
import {LoadingService} from '../../../services/loading.service';


@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  moviesList$: Observable<any[]>
  constructor(private movieStore: MoviesStore) {}

  ngOnInit(): void {
   this.moviesList$ = this.movieStore.movieList$;


  }
}
