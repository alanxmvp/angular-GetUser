import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: Object;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId')
    this.getUserImage(userId)
  }

  getUserImage(userId) {
    this.data.getSpecificUser(userId).subscribe(data => {
      this.users = data
    })
  }

  backClicked() {
    this.location.back();
  }

}
