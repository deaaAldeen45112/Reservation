import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartItemService } from '../../../service/cartItem.service';
import { MenuitemService } from '../../../service/menuitem.service';
import { MenuItemDiscountService } from '../../../service/menuItemDiscount.service';
import { MenuItemReviewService } from '../../../service/menuItemReview.service';

import { CartItem } from 'src/data/cartItem';
import { MenuItemReview } from 'src/data/menuItemReview';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-show-menu-item',
  templateUrl: './show-menu-item.component.html',
  styleUrls: ['./show-menu-item.component.css']
})
export class ShowMenuItemComponent implements OnInit {
  item:any;
  editId:number=28;
  list:any[]=[];
  listDis:any;
 
  rating= new FormControl();
  content=new FormControl();
  quantity=new FormControl();



 constructor(private route:ActivatedRoute,private cartItemService:CartItemService,private menuItemDiscount:MenuItemDiscountService,private menuItemService:MenuitemService,private menuReviewService :MenuItemReviewService,private spinner:NgxSpinnerService,private toast:ToastrService) { }
 
getMenuItemById(){

 this.route.params.subscribe(params=>{
 this.editId=params['id'];

 this.menuItemService.getMenuItemById(this.editId).subscribe((res:any[])=>{

 this.item=res[0];
 this.pri=this.item.menu_Item_Price;
 console.log(this.item)
 console.log(this.item.menu_Item_Price)
 this.GetMenuItemReviewByMenuItemId(this.editId);
 this.GetMenuItemDiscountByMenuItemId(this.editId);
 
 })
  console.log(this.editId)

 })




}


InsertMenuReview(){
  let menuReview: MenuItemReview=new MenuItemReview(); 
  const v:number=28;
  menuReview.Menu_Item_Content=this.content.value;
  menuReview.Menu_Item_Rating=5;//Number.parseInt(this.rating.value);
  menuReview.Menu_Item_Review_Title='review';
  menuReview.Menu_Item_Id=parseInt(this.editId+"");
  
  console.log( menuReview.Menu_Item_Id);
  this.menuReviewService.InsertMenuItemReview(menuReview).subscribe(res=>{console.log(res);
    this.GetMenuItemReviewByMenuItemId(this.editId);
  });
  }
  


  search(){



  }


  DeleteMenuItemReview(reviewId:number){


  this.menuReviewService.DeleteMenuItemReview(reviewId).subscribe(res=>{console.log(res)
    this.GetMenuItemReviewByMenuItemId(this.editId);
  });  



  
}


AddToCartItem(){

  console.log("yeee");
let cartItem:CartItem=new CartItem();

let cartId=localStorage.getItem('cart_id');
  console.log(cartId);
if(cartId!=null)
   {
     cartItem.Cart_Id=Number.parseInt(cartId);
   }

console.log(cartId);

console.log(this.item.menu_Item_Price*0.1);
cartItem.Cart_Item_Price=this.pri;
console.log(cartItem.Cart_Item_Price);
cartItem.Cart_Item_Quantity=Number.parseInt(this.quantity.value);
cartItem.Menu_Item_Id=this.item.menu_Item_Id;

this.cartItemService.AddToCartItem(cartItem).subscribe((res)=>{console.log(res);
  this.toast.success("Add to cart Thank you to request");
})
}




GetAllMenuItemReview(){
  this.menuReviewService.GetAllMenuItemReview().subscribe((res:any[])=>{console.log(res);  this.list=res;})
  }
  GetMenuItemReviewByMenuItemReviewId(reviewId:number){
  this.menuReviewService.GetMenuItemReviewByMenuItemReviewId(reviewId).subscribe((res:any[])=>{console.log(res);this.list=res;});
  }
 
  GetMenuItemReviewByMenuItemId(menuItemId:number){
    this.spinner.show();
    this.menuReviewService.GetMenuItemReviewByMenuItemId(menuItemId).subscribe((res:any[])=>{console.log(res); this.list=res;
    this.spinner.hide();
    console.log(res)
    });  }
    pri:number=0;
    GetMenuItemDiscountByMenuItemId(menuItemId:number){
      this.spinner.show();
      this.menuItemDiscount.GetMenuItemDiscountByMenuItemId(menuItemId).subscribe((res:any[])=>{console.log(res);
        
        
        this.listDis=res[0];
      if( this.listDis)
      {
     this.pri=this.item.menu_Item_Price*((100-this.listDis.discount_Rate)/100.0);
      }

      else {
this.pri=this.item.menu_Item_Price;

      }
      this.spinner.hide();
      });
      }
 ngOnInit(): void {

this.getMenuItemById();    



 }

}
