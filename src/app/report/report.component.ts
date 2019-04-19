import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from '../services/library-service.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportData :any = []
  constructor(private libraryService: LibraryServiceService) { }

  ngOnInit() {
    this.generateReport();
  }

  generateReport() {
    this.libraryService.generateReport().subscribe(res => {
      console.log(res);
      this.reportData = res;
    });
  }
}
