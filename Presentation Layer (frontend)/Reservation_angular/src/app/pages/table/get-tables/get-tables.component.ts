import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { TableClass } from 'src/app/shared/table-class.model';
import { MatDialog } from '@angular/material/dialog';
import { AddTableComponent } from '../add-table/add-table.component';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { ToastrService } from 'ngx-toastr';
import { TableServiceService } from 'src/app/service/table-service.service';
@Component({
  selector: 'app-get-tables',
  templateUrl: './get-tables.component.html',
  styleUrls: ['./get-tables.component.css']
})
export class GetTablesComponent implements OnInit {

  tables!: TableClass[];
  image: any = [];
  path: string = './assets/img/Tables/';
  images: String[] = [];
  constructor(private tableService: TableServiceService, 
    private router: Router, private spinner: NgxSpinnerService, public dialog: MatDialog,
    private route: ActivatedRoute,/*private toastr: ToastrService*/) { }

  ngOnInit(): void {
    this.GetAllTables();
    this.spinner.show()
  }
  GetAllTables() {
    this.tableService.GetTables().subscribe(result => {
      this.spinner.show();
      this.tables = result
      this.GetImages(this.tables);
      this.spinner.hide();
    });
  }
  GetImages(arr: any[]) {
    for (let i = 0; i < arr.length; i++) {
      this.images[i] = this.path + arr[i].image_Location;
    }
  }
  AddTable() {
    this.router.navigate(['../Tables/AddTable']);
  }
  EditTable(id?: number) {
    this.router.navigate(['../EditTable', id], { relativeTo: this.route });

  }
  DeleteTable(id?: number) {
    this.tableService.DeleteTable(id).subscribe(
      (result)=>{
        if(result==false)
        {
          //this.toastr.error('Sorry , Table has Reservations')
        }
        else
        {
          //this.toastr.success('Table Deleted Succefully')
        }
      },
      (error)=>{
        console.log('Do Something');
        
      }
    );
  }

}