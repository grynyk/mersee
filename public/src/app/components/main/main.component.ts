import { Component, OnInit} from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    document.querySelector('body').style.backgroundColor = "#F0EFEA";
    document.body.classList.remove('login-bg-img');
  }

}
