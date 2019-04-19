import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../services/library-service.service';


@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {
  libraryItems : any  = [];
  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {
    this.display();
  }

  display() {
    this.libraryService.displayItems().subscribe(res => {
      console.log(res);
      this.libraryItems = res;
    });
  }

}
