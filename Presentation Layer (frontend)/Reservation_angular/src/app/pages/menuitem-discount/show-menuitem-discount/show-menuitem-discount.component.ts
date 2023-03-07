import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemDiscountService } from 'src/app/service/menuItemDiscount.service';
import { MenuItemDiscount } from 'src/data/menuItemDiscount';

@Component({
  selector: 'app-show-menuitem-discount',
  templateUrl: './show-menuitem-discount.component.html',
  styleUrls: ['./show-menuitem-discount.component.css']
})
export class ShowMenuitemDiscountComponent implements OnInit {

  
  item:any;
  editId=0;
 constructor(private route:ActivatedRoute,private menuItemDiscountService:MenuItemDiscountService) { }
 
 GetMenuCategoryById(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.menuItemDiscountService.GetMenuItemDiscountByDiscountId(this.editId).subscribe((res:any[])=>{
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
