import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { IndexService } from 'src/app/service/index.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],

})
export class IndexComponent implements OnInit {
  headerArr: any = [];
  indexArr?: any = [];
  list:any[]=[];
  image: string = './assets/img/Index/';
  constructor(private elementRef: ElementRef, private indexService: IndexService,
    private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = '#000';
    this.getHeader();
    this.getIndex();
  }
  getIndex() {
    this.indexService.GetIndex().subscribe(
      (result:any[]) => {

        console.log(result);
        
        console.log(result[0].bg_Path);

        this.list=result;
        this.indexArr = result
        this.image = this.image +result[0].bg_Path;
        this.spinner.hide();
      }
    );
  }
  getHeader() {
    this.spinner.show();
    this.indexService.GetHeader().subscribe(
      result => {
        this.headerArr = result;
      }
    );
  }
  BookTable() {
    this.router.navigate(['reservation/tables']);
  }
}
