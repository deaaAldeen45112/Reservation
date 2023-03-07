import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';



@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css']
})
export class TableDialogComponent implements OnInit {
tableData:TableClass=this.data.TableData;

  constructor(@Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    
  }

}
