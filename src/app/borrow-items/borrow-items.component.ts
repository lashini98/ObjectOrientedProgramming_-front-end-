import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../services/library-service.service';
import { ValueTransformer } from '@angular/compiler/src/util';
import { detachEmbeddedView } from '@angular/core/src/view';


@Component({
  selector: 'app-borrow-items',
  templateUrl: './borrow-items.component.html',
  styleUrls: ['./borrow-items.component.scss']
})
export class BorrowItemsComponent implements OnInit {

  selectType = '';
  item: any = {};
  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {
  }

  borrowItem(item) {
    let dateFormat = require('dateformat');
    let now = new Date();
    let get_returnDate = new Date();
    var borrow_format = dateFormat(now, "dd,mm,yyyy,h,MM,ss,TT").toString();
    var splitted_borrow = borrow_format.split(",", 7); 

    if(item.type === 'book'){
      get_returnDate.setDate(get_returnDate.getDate() + 7);
    }else{
      get_returnDate.setDate(get_returnDate.getDate() + 3);
    }
     
    var returnDate_format = dateFormat(get_returnDate, "dd,mm,yyyy,h,MM,ss,TT").toString();
    var splitted_return = returnDate_format.split(",",7);


    var borrow_date = {
      "year" : splitted_borrow[2],
      "month" : splitted_borrow[1],
      "day" : splitted_borrow[0],
      "hrs" : splitted_borrow[3],
      "mins" : splitted_borrow[4]
    };
    
    var return_date ={
      "year" : splitted_return[2],
      "month" : splitted_return[1],
      "day" : splitted_return[0],
      "hrs" : splitted_return[3],
      "mins" : splitted_return[4]
    }

    if(item.type === 'book'){
      var borrow_book = {
        "isbn" : item.isbn,
        "borrow_date" : borrow_date,
        "return_date" : return_date,
        "userId" : item.borrowerId,
        "username" : item.borrowerName,
        "contactNo" : item.borrowerContact,
        "userEmail" : item.borrowedEmail,
        "itemType" : true
      };

      this.libraryService.borrowItems(borrow_book).subscribe(res => {
        console.log(res);
        if(res != null){
          alert("Item is successfully borrowed");
        }else{
          alert("Item will be available on " +res);
        }
      });

      
    }else{
      var borow_dvd = {
        "isbn" : item.isbn,
        "borrow_date" : borrow_date,
        "return_date" : return_date,
        "userId" : item.borrowerId,
        "username" : item.borrowerName,
        "contactNo" : item.borrowerContact,
        "userEmail" : item.borrowedEmail,
        "itemType" : false
      };

      this.libraryService.borrowItems(borow_dvd).subscribe(res => {
      console.log(res);
      if(res == 'null'){
        alert("Item is successfully borrowed");
      }else{
        alert("Item will be available on "+res);
      }
    });
    }

   

    //console.log("Bw date",borrow_book);
    //console.log("R date", return_date);

    // this.libraryService.borrowItems(item).subscribe(res => {
    //   console.log(res);
    // });
  }
}
