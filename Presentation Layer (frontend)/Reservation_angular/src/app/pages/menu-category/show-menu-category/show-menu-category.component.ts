import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuitemCategoryService } from 'src/app/service/menuItemCategory.service';

@Component({
  selector: 'app-show-menu-category',
  templateUrl: './show-menu-category.component.html',
  styleUrls: ['./show-menu-category.component.css']
})
export class ShowMenuCategoryComponent implements OnInit {

  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private categoryService:MenuitemCategoryService) { }
 
 GetMenuCategoryById(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.categoryService.GetMenuCategoryById(this.editId).subscribe((res:any[])=>{
 this.item=res[0];
 console.log(this.item)
 })
  console.log(this.editId)

 })

}


 ngOnInit(): void {
this.GetMenuCategoryById();    
 }

}
