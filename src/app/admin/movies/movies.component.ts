import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MoviesService} from '../../../services/movies.service';
import {EdituserComponent} from '../edituser/edituser.component';
import {MatDialog} from '@angular/material/dialog';
import {EditmovieComponent} from '../editmovie/editmovie.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  displayedColumns: string[] = ['id','hinhAnh','tenPhim','maPhim',  'moTa','ngayKhoiChieu', 'action'];
  dataSource: MatTableDataSource<any>;
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private movieService: MoviesService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((result)=>{
      this.dataSource = new MatTableDataSource(result);
      this.resultsLength = result.length
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleDeleteMovie(element: any) {
    console.log(element);
    this.movieService.deleteMovies(element.maPhim).subscribe({
      complete: ()=>{
        console.log('delete success');
      },
      error: (err)=>{
        console.log('error', err);
      }
    })
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(EditmovieComponent, { data: value });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log('result', result);
      if(result ===false || result === undefined){
      }
      else {
        this.movieService.updateMovies(result).subscribe({
          complete: ()=>{
            console.log('Update success');
          },
          error: (err)=> {
            console.log('err update', err);
          }
        })
      }
    })
  }
}
