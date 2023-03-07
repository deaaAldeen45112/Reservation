import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuItemDiscountService } from 'src/app/service/menuItemDiscount.service';
import { MenuItemDiscount } from 'src/data/menuItemDiscount';

@Component({
  selector: 'app-edit-menuitem-discount',
  templateUrl: './edit-menuitem-discount.component.html',
  styleUrls: ['./edit-menuitem-discount.component.css']
})
export class EditMenuitemDiscountComponent implements OnInit {

  list:any;
  editId:number=-1;
    constructor(private menuItemDiscountService:MenuItemDiscountService,private route:ActivatedRoute) { }
  
    editMenuDiscount= new FormGroup({
      rate: new FormControl(),
      menuItemId:new FormControl(),
      menuDiscountId:new FormControl(),
    });
  UpdateMenuCategory(){  
  let menuItemDiscount :MenuItemDiscount =new MenuItemDiscount();
  menuItemDiscount.Discount_Rate=Number.parseFloat( this.editMenuDiscount.controls['rate'].value);
 menuItemDiscount.Discount_Id=this.list.discount_Id;
 menuItemDiscount.Menu_Item_Id=Number.parseInt(this.editMenuDiscount.controls['menuItemId'].value);
  console.log('deaa');
  this.menuItemDiscountService.UpdateMenuItemDiscount(menuItemDiscount).subscribe((res)=>{console.log(res)});   
  
  }
  GetMenuItemDiscountByDiscountId(discountId:number){
    this.menuItemDiscountService.GetMenuItemDiscountByDiscountId(discountId).subscribe((res:any[])=>{console.log(res);this.list=res[0];});
    }
  
  ngOnInit(): void {
  
  this.route.params.subscribe(res=>{
   this.editId= res['id'];
  this.GetMenuItemDiscountByDiscountId(this.editId);
  });
  }
  
}
