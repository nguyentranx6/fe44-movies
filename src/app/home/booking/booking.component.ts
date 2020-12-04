import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"],
})
export class BookingComponent implements OnInit {
  bookingShowtime: any;
  totalCash: number;
  listBooking: any[] = [];
  idBooking;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getBookingDetail();
  }
  getBookingDetail() {
    this.activatedRoute.params.subscribe({
      next: (param) => {
        this.idBooking = param.idBooking
        this.movieService.getBookingDetail(param.idBooking).subscribe({
          next: (result) => {
            console.log('result', result);
            this.bookingShowtime = result;
          },
        });
      },
    });
  }
  handleBooking(chair: any) {
    const ticketItem = {
      maGhe: chair.maGhe,
      giaVe: chair.giaVe
    }
    const index = this.listBooking.findIndex((item) => {
      return item.maGhe == chair.maGhe;
    });
    if (index > -1) {
      this.listBooking.splice(index, 1);
    } else {
      this.listBooking.push(ticketItem);
    }
    this.totalCash = this.listBooking.reduce((sum, item) => {
      return sum + item.giaVe;
    }, 0);
  }
  cancelBooking() {
    this.listBooking = [];
    this.getBookingDetail();
  }
  setTimeOut() {
    /*let timer: number =  300;
     let x= setInterval(function () {
       let minutes: any = Math.floor(timer / 60);
       let seconds: any = timer % 60;


        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('demo').innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(x);
          document.getElementById('demo').innerText = 'Hết thời gian đặt vé'
          document.getElementById('test').style.display = 'none'
        }
      }, 1000);*/
  }
  handleCheckOut() {
    console.log("this.listBooking", this.listBooking);
    const ticket = {
      maLichChieu: this.idBooking,
      danhSachVe: this.listBooking
    }
    this.movieService.handleBooking(ticket).subscribe({
      complete: ()=> {
        console.log("Booking success!");
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }
}
