import { Component, OnInit ,Injectable } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TableServiceService } from 'src/app/service/table-service.service';

import { TableClass } from 'src/app/shared/table-class.model';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  path: string = './assets/img/Tables/';

  tableId: number = 0;
  chair: number = 0;
  details: string = '';
  image: string = '';
  table: TableClass = new TableClass();

  constructor(private tableService: TableServiceService, private router: Router,
    public spinner: NgxSpinnerService, private route: ActivatedRoute, 
    /*private toastr: ToastrService*/) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.tableId = param['id'];
      this.getTableById();
    });
  }

  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.tableService.uploadImage(formData).subscribe(
      (result) => {
       this.table.image_Location=result;
       console.log(result);
        this.image = this.path + result;
        console.log(this.image);
      }
    );
  }

  UpdateTable(from: NgForm) {
  
    this.tableService.UpdateTable(this.table).subscribe(
      (result: any) => {
        if(result){
         // this.toastr.success('Table Updated succefully');
         console.log("yes");
          this.backToList();
        }
      },(error:any) =>
      {

        console.log("no");
       // this.toastr.error('Error has been occured');
      }
    );
  }

  getTableById() {
    this.spinner.show()
    this.tableService.GetById(this.tableId).subscribe(
      (result:any) => {
        this.table = result[0];
        console.log(this.table);
        this.image = this.path + this.table?.image_Location;
        this.spinner.hide();
      }
    );
  }

  backToList(){
    this.router.navigate(['../../GetTable'], {relativeTo: this.route});
  }
}
