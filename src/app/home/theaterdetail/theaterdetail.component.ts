import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-theaterdetail',
  templateUrl: './theaterdetail.component.html',
  styleUrls: ['./theaterdetail.component.css']
})
export class TheaterdetailComponent implements OnInit {
  @Input() groupTheater: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.groupTheater);
  }
  customTrackBy(index: number, item: any): any{
    return index
  }
  customTrackBy2(index: number, item: any): any{
    return index
  }

}
