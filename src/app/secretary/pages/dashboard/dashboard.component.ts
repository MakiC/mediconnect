import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private readonly _authService: AuthService,
              private readonly _userService: UserService) {}

  ngOnInit(): void {
    this._userService.findAll().subscribe((users: any[]) => {
      console.log(users);
    });
  }

  public onLogout(): void {
    this._authService.logout();
  }
}
