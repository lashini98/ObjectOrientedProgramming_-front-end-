import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../services/library-service.service';


@Component({
  selector: 'app-delete-items',
  templateUrl: './delete-items.component.html',
  styleUrls: ['./delete-items.component.scss']
})
export class DeleteItemsComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {
  }

  deleteItem(isbn) {
    this.libraryService.deleteItem(isbn).subscribe(res => {
      console.log(res);
    });
  }

}
