import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuitemCategoryService } from 'src/app/service/menuItemCategory.service';
import { MenuCategory } from 'src/data/menuItemCategory';

@Component({
  selector: 'app-add-menu-category',
  templateUrl: './add-menu-category.component.html',
  styleUrls: ['./add-menu-category.component.css']
})
export class AddMenuCategoryComponent implements OnInit {
  insertMenuCategory= new FormGroup({
    name: new FormControl(),
    content:new FormControl(),
    parentId:new FormControl(),
  });
  constructor(private categoryService :MenuitemCategoryService,private toast:ToastrService) { }
  InsertMenuCategory(){
 let menuCategory: MenuCategory=new MenuCategory();

 menuCategory.Menu_Category_Parent_Id=Number.parseInt(this.insertMenuCategory.controls['parentId'].value);
 menuCategory.Menu_Category_Name=this.insertMenuCategory.controls['name'].value;
 menuCategory.Menu_Category_Content=this.insertMenuCategory.controls['content'].value;
console.log(menuCategory.Menu_Category_Content+"aaaaa");

  this.categoryService.InsertMenuCategory(menuCategory).subscribe(res=>{console.log(res)
  
  this.toast.success("add category success");
  });
  }
  ngOnInit(): void {
  }



}
