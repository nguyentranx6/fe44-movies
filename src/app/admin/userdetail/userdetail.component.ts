import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import {ActivatedRoute, Router} from '@angular/router';
import {EdituserComponent} from '../edituser/edituser.component';
import {MatDialog} from '@angular/material/dialog';
import {LoadingService} from '../../../services/loading.service';

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.css"],
})
export class UserdetailComponent implements OnInit {
  user;
  bookingInfo;
  type;
  displayedColumns: string[] = ['id','maVe','danhSachGhe','giaVe','ngayDat','tenPhim','thoiLuongPhim'];
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.data['type'];
    this.activatedRoute.params.subscribe({
      next: (params) => {
        //Gọi API get movie detail từ service
        console.log('params',params);
        const userDetail$ = this.userService.getDetailUserInfo(params.id);
        console.log('userDetail$',userDetail$);
        this.loadingService.showLoaderUntilCompleted(userDetail$).subscribe({
          next: (result) => {
            console.log("result", result);
            this.user = result;
            this.bookingInfo = result.thongTinDatVe.reverse();
          },
        })
      },
      error: (error) => console.log(error),
    });
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(EdituserComponent, { data: value });
    dialogRef.afterClosed().subscribe((result)=>{
      if(result ===false || result === undefined){
      }
      else {
        this.userService.updateUser(result).subscribe({
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
