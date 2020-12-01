import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements AfterViewInit, OnInit {
  dataSource: MatTableDataSource<any>;
  allUsers: any = [];
  constructor(private userService: UserService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayColums: string[] = [
    "taiKhoan",
    "hoTen",
    "email",
    "soDt",
    "maLoaiNguoiDung",
  ];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe();
    this.userService.allUsers$.subscribe((result) => {
      this.allUsers = result;
      this.dataSource = new MatTableDataSource<any>(this.allUsers);
      this.dataSource.paginator = this.paginator;
    });

  }
  ngAfterViewInit() {


  }
}
