import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../services/library-service.service';


@Component({
  selector: 'app-return-items',
  templateUrl: './return-items.component.html',
  styleUrls: ['./return-items.component.scss']
})
export class ReturnItemsComponent implements OnInit {

  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {
  }

  returnItem(isbn) {
    this.libraryService.returnItems(isbn).subscribe(res => {
      console.log(res);
      if(res == null){
        alert('item is Successfully returned.. No amount charged')
      }else{
        alert('item is Successfully returned..Amount is ' + res)
      }
    });
  }


}
