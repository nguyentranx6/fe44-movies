import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MatDialog } from '@angular/material/dialog';
import { EdituserComponent } from '../edituser/edituser.component';
import { tap } from 'rxjs/operators';
import { log } from 'util';
import { MatSort } from '@angular/material/sort';
import { UsersStore } from '../../../services/users.store';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements AfterViewInit, OnInit {
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayColums: string[] = [
    'id',
    'taiKhoan',
    'hoTen',
    'email',
    'soDt',
    'maLoaiNguoiDung',
    'action',
  ];
  length: number;
  constructor(
    private userStore: UsersStore,
    private userService: UserService,
    public dialog: MatDialog,
  ) {

    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.userService.getAllUsers().subscribe((users) => {
      this.dataSource = new MatTableDataSource<any>(users);
      this.dataSource.paginator = this.paginator;
      this.length = users.length;
      this.dataSource.sort = this.sort;
    });


  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleDelete(taiKhoan: any) {
    this.userService.deleteUser(taiKhoan).subscribe({
      complete: () => {},
      error: (err) => {
        console.log('err', err);
        if (err.status === 500) {
          alert(err.error);
        } else if (err.status === 200) {
          alert('Xóa người dùng thành công');
        }
      },
    });
  }

  openDialog(value) {
    const dialogRef = this.dialog.open(EdituserComponent, { data: value });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === false || result === undefined) {
      } else {
        this.userService.updateUser(result).subscribe({
          complete: () => {
            console.log('Update success');
          },
          error: (err) => {
            console.log('err update', err);
          },
        });
      }
    });
  }
}
