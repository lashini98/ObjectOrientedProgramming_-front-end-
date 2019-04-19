import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LibraryServiceService } from '../services/library-service.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  selectType = '';
  actors = [];
  actor = '';
  addItems: FormGroup;
  selectedDate: any;
  slots: any;
  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {

    this.selectedDate = new Date();
    this.loadData();
  }

  save(values) {
    console.log(this.selectedDate)
    values.publicationDate = null;
    if (values.type === 'book') {

      var bk = {
        "w1698510_isbn": values.w1698510_isbn,
        "w1698510_title": values.w1698510_title,
        "w1698510_sector": values.w1698510_sector,
        "w1698510_bookAuthor": values.w1698510_bookAuthor,
        "w1698510_bookPublisher": values.w1698510_bookPublisher,
        "w1698510_total_Pages": values.w1698510_total_Pages
      };
      var book = {
        'book': bk,
        'dvd': null
      };
      console.log(book);
      this.libraryService.saveItems(book).subscribe(res => {
        console.log(res);
        if (res) {
          alert('Book is successfully saved');
        } else {
          alert('Error occured while book is saving');
        }
        this.ngOnInit();
      });

    } else {

      var d = {
        "w1698510_isbn": values.w1698510_isbn,
        "w1698510_title": values.w1698510_title,
        "w1698510_sector": values.w1698510_sector,
        "w1698510_availSubtitles": values.w1698510_availSubtitles,
        "w1698510_availLanguages": values.w1698510_availLanguages,
        "w1698510_dvdProducer": values.w1698510_dvdProducer,
        "w1698510_dvdActors": values.w1698510_dvdActors
      };

      var dvd = {
        'book': null,
        'dvd': d
      };

      this.libraryService.saveItems(dvd).subscribe(res => {
        console.log(res);
        if (res) {
          alert('DVD is successfully saved');
        } else {
          alert('Error occured while dvd is saving');
        }
        this.ngOnInit();
      });
    }


  }


  addActors() {
    this.actors.push(this.actor);
    console.log(this.actors);
    this.actor = '';
  }

  loadData() {
    this.libraryService.getAvailableSlots().subscribe(res => {
      console.log(res);
      this.slots=res;

    })
  }

}
