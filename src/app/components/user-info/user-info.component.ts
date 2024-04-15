import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  // Input property to receive user information
  @Input() userInfo: any;

  constructor() { }

  // Lifecycle hook called after the component's inputs have been initialized
  ngOnInit(): void {
  }

}
