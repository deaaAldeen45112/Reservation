import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuitemCategoryService } from 'src/app/service/menuItemCategory.service';
import { MenuCategory } from 'src/data/menuItemCategory';

@Component({
  selector: 'app-edit-menu-category',
  templateUrl: './edit-menu-category.component.html',
  styleUrls: ['./edit-menu-category.component.css']
})
export class EditMenuCategoryComponent implements OnInit {

  list:any;
editId:number=-1;
  constructor(private categoryService:MenuitemCategoryService,private toast:ToastrService,private route:ActivatedRoute) { }

  editMenuCategory= new FormGroup({
    name: new FormControl(),
    content:new FormControl(),
    parentId:new FormControl(),
  });
UpdateMenuCategory(){  
let menuCategory :MenuCategory =new MenuCategory();
menuCategory.Menu_Category_Id=this.list.menu_Category_Id;
menuCategory.Menu_Category_Name=this.editMenuCategory.controls['name'].value;
menuCategory.Menu_Category_Parent_Id=Number.parseInt(this.editMenuCategory.controls['parentId'].value);
menuCategory.Menu_Category_Content=this.editMenuCategory.controls['content'].value;
console.log(menuCategory.Menu_Category_Id)
//menuCategory.Menu_Category_Parent_Id=Number.parseInt(this.editMenuCategory.controls['parentId'].value);*/
console.log('deaa');
this.categoryService.UpdateMenuCategory(menuCategory).subscribe((res)=>{console.log(res)

this.toast.success("add category success");

});   

}
GetMenuCategoryById(categoryId:number){
  this.categoryService.GetMenuCategoryById(categoryId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
  }

ngOnInit(): void {

this.route.params.subscribe(res=>{
 this.editId= res['id'];
this.GetMenuCategoryById(this.editId);
});
}

}

