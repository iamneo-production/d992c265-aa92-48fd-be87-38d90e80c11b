import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  credential(){
    this.router.navigate(['/employees']);
  }
  bank(){
    this.router.navigate(['/bank-list']);
  }
  media(){
    this.router.navigate(['/media-locker'])
  }
}
