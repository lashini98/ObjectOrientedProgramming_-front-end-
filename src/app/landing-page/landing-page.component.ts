import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  addItems(){
    this.router.navigate(['add-items']);
  }

  deleteItems(){
    this.router.navigate(['delete-items']);
  }

  borrowItems(){
    this.router.navigate(['borrow-items']);
  }

  returnItems(){
    this.router.navigate(['return-items']);
  }

  displayItems(){
    this.router.navigate(['display-items']);
  }

  report(){
    this.router.navigate(['report']);
  }

}
