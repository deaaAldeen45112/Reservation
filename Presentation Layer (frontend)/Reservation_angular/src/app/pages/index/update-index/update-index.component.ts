import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IndexService } from 'src/app/service/index.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-index',
  templateUrl: './update-index.component.html',
  styleUrls: ['./update-index.component.css']
})
export class UpdateIndexComponent implements OnInit {
  index: any = [];

  path: string = './assets/img/Index/';
  image: string = '';


  constructor(private indexService: IndexService,private router: Router,
    public spinner: NgxSpinnerService, private route: ActivatedRoute, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getIndex();
  }
  getIndex() {
    this.spinner.show();
    this.indexService.GetIndex().subscribe(
      (result) => {
         this.index = result;
         console.log(this.index)
         console.log("DDD")
         this.image = this.path + this.index[0].bg_Path;
         this.spinner.hide();
        }
    );
  }
  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.indexService.uploadImage(formData).subscribe(
      (result) => {
       this.index[0].bg_Path=result;
        this.image = this.path + result;
        console.log(this.image);
      }
    );
  }

  UpdateIndex(from: NgForm) {
  
    this.indexService.UpdateIndex(this.index[0]).subscribe(
      (result) => {
        if(result){
          this.toastr.success('Index Updated succefully');
          this.backToList();
        }
      },(error) =>
      {
        this.toastr.error('Error has been occured');
      }
    );
  }

  backToList(){
    this.router.navigate(['../../dashboard'], {relativeTo: this.route});
  }
}
