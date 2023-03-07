import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuitemCategoryService } from 'src/app/service/menuItemCategory.service';

@Component({
  selector: 'app-getlist-menu-category',
  templateUrl: './getlist-menu-category.component.html',
  styleUrls: ['./getlist-menu-category.component.css']
})
export class GetlistMenuCategoryComponent implements OnInit {
 list:any[]=[];
 name:FormControl= new FormControl();
 parentId:FormControl= new FormControl();
  constructor(private categorySrvice:MenuitemCategoryService) { }

  ngOnInit(): void {
    this.GetAllMenuCategory();
  }

  search(){
  let exName=this.name.value!=null;
  let exParentId=this.parentId.value!=null;
  console.log(exName+" "+exParentId)
  if(exName&&exParentId)
  {
    this.GetMenuCategoryByParentIdAndName(this.parentId.value,this.name.value);
  }
  else if(exName){
    console.log("name")
    this.GetMenuCategoryByName(this.name.value)

  }
else if (exParentId){

  this.GetMenuCategoryByParentId(this.parentId.value)
}
  this.GetAllMenuCategory();

  }
  DeleteMenuCategory(categoryId:number){
  this.categorySrvice.DeleteMenuCategory(categoryId).subscribe(res=>{console.log(res)
    this.GetAllMenuCategory();
  });  
  
}
  GetAllMenuCategory(){
  this.categorySrvice.GetAllMenuCategory().subscribe((res:any[])=>{console.log(res);  this.list=res;})
  }
  GetMenuCategoryById(categoryId:number){
  this.categorySrvice.GetMenuCategoryById(categoryId).subscribe((res:any[])=>{console.log(res);this.list=res;});
  }
  GetMenuCategoryByName(name :string){
    this.categorySrvice.GetMenuCategoryByName(name).subscribe((res:any[])=>{console.log(res); this.list=res;});
  }
  GetMenuCategoryByParentId(ParentId:number){
    this.categorySrvice.GetMenuCategoryByParentId(ParentId).subscribe((res:any[])=>{console.log(res); this.list=res;});
  }
  GetMenuCategoryByParentIdAndName(ParentId:number, name :string ){
    this.categorySrvice.GetMenuCategoryByParentIdAndName(ParentId,name).subscribe((res:any[])=>{console.log(res); this.list=res;});  }

}
