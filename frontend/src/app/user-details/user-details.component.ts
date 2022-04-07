import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
  }


}
