import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource:String;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData()
      .subscribe(result => {
        this.dataSource = result;
        console.log(this.dataSource);
      });
    }
}
