import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
import { SysImagesService } from 'src/app/service/sys-images.service';

@Component({
  selector: 'app-sysimage',
  templateUrl: './sysimage.component.html',
  styleUrls: ['./sysimage.component.css']
})
export class SysimageComponent implements OnInit {
  CreateForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    imagename: new FormControl('')
  });
  path:any;
  constructor(private sysImageService: SysImagesService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
 
  uploadImage(files: any) {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.sysImageService.uploadImage(formData).subscribe(
      (result)=>{
        this.CreateForm.controls['imagename'].setValue(result);
      }
    );
  }
  Create() {
    const obj = {
      image_Name: this.CreateForm.value.name,
      image_Path: this.CreateForm.value.imagename,
    }
    console.log(obj);
    debugger
    this.sysImageService.Create(obj);
  }
  
}

