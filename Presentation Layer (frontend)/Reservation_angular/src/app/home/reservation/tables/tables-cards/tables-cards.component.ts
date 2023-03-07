import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableClass } from 'src/app/shared/table-class.model';
import { ReserveDialogComponent } from '../reserve-dialog/reserve-dialog.component';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import { TablesComponent } from '../tables.component';


@Component({
  selector: 'app-tables-cards',
  templateUrl: './tables-cards.component.html',
  styleUrls: ['./tables-cards.component.css']
})
export class TablesCardsComponent implements OnInit {
  @Input() table_Id: number | undefined;
  @Input() max_Person: number | undefined;
  @Input() details: string | undefined;
  @Input() image_Location: string | undefined;
  @Input() temproryReservations: string | undefined;

  @Input() tableData = new TableClass;
  constructor(public dialog: MatDialog, public table: TablesComponent) { }
  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(TableDialogComponent, { data: { TableData: this.tableData } });
  }
  
  openReserveDialog() {
    this.dialog.open(ReserveDialogComponent, { data: { TableId: this.tableData.table_Id } });
  }
}
