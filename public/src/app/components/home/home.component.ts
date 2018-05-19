import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns = ['id','name','age','description'];

  dataSource = new MatTableDataSource();

  constructor(private apiService: ApiService,private router:Router) { }

  ngOnInit() {
    this.apiService.getData()
      .subscribe(result => {
        this.dataSource.data = result;
        console.log(this.dataSource.data);
      });
    }
    applyFilter(filterValue: string) {
      filterValue = filterValue.toLowerCase();
      filterValue = filterValue.trim();
      this.dataSource.filter = filterValue;
    }
}
