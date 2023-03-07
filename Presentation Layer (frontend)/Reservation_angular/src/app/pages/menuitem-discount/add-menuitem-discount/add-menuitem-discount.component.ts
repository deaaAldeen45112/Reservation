import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuItemDiscountService } from 'src/app/service/menuItemDiscount.service';
import { MenuItemDiscount } from 'src/data/menuItemDiscount';

@Component({
  selector: 'app-add-menuitem-discount',
  templateUrl: './add-menuitem-discount.component.html',
  styleUrls: ['./add-menuitem-discount.component.css']
})
export class AddMenuitemDiscountComponent implements OnInit {

  insertMenuItemDiscount= new FormGroup({
    rate: new FormControl(),
    menuItemId:new FormControl(),
  });
  constructor(private menuItemDiscountService :MenuItemDiscountService,private toast:ToastrService) { }
  InsertMenuDiscount(){
 let menuItemDiscount: MenuItemDiscount=new MenuItemDiscount();
 menuItemDiscount.Discount_Rate=Number.parseFloat(this.insertMenuItemDiscount.controls['rate'].value);
 menuItemDiscount.Menu_Item_Id=Number.parseInt(this.insertMenuItemDiscount.controls['menuItemId'].value);
this.menuItemDiscountService.InsertMenuItemDiscount(menuItemDiscount).subscribe(res=>{console.log(res)

this.toast.success("add menu discout  is success");
});
  }
  ngOnInit(): void {


  }

  
}
