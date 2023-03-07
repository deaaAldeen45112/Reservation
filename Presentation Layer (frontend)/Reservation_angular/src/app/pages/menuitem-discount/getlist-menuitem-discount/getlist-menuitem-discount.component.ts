import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MenuItemDiscountService } from 'src/app/service/menuItemDiscount.service';

@Component({
  selector: 'app-getlist-menuitem-discount',
  templateUrl: './getlist-menuitem-discount.component.html',
  styleUrls: ['./getlist-menuitem-discount.component.css']
})
export class GetlistMenuitemDiscountComponent implements OnInit {

  list:any[]=[];
  rate:FormControl= new FormControl();
  menuItemId:FormControl= new FormControl();
   constructor(private menuItemDiscount:MenuItemDiscountService) { }
 
   ngOnInit(): void {
     this.GetAllMenuItemDiscount();
   }
 
   search(){
   
   let exmenuItemId=this.menuItemId.value!=null&&this.menuItemId.value;
   console.log(this.menuItemId.value)
       if (exmenuItemId)
       {
         this.menuItemDiscount.GetMenuItemDiscountByMenuItemId(this.menuItemId.value).subscribe((res:any[])=>{
       this.list=res;
       console.log(res)

         });

       }
       else {

        this.menuItemDiscount.GetAllMenuItemDiscount().subscribe((res:any[])=>{
          this.list=res;
   
            });
       }
  }
  DeleteMenuItemDiscount(menuDiscontId:number){

    console.log(menuDiscontId)
   this.menuItemDiscount.DeleteMenuItemDiscount(menuDiscontId).subscribe(res=>{console.log(res)
     this.GetAllMenuItemDiscount();
   });  
   
 }
 GetAllMenuItemDiscount(){
   this.menuItemDiscount.GetAllMenuItemDiscount().subscribe((res:any[])=>{console.log(res);  this.list=res;})
   }
   GetMenuItemDiscountByMenuItemId(categoryId:number){
   this.menuItemDiscount.GetMenuItemDiscountByMenuItemId(categoryId).subscribe((res:any[])=>{console.log(res);this.list=res;});
   }
  
}
