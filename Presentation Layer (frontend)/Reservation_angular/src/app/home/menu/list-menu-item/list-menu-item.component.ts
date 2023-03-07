import { Component, OnInit } from '@angular/core';
import { animate } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuitemService } from '../../../service/menuitem.service';
import { MenuitemCategoryService } from '../../../service/menuItemCategory.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-menu-item.component.html',
  styleUrls: ['./list-menu-item.component.css']
})
export class ListMenuItemComponent implements OnInit {

  foodName:string[]=['Lobster Bisque','Bread Barrel','Crab Cake','Caesar Selections',
  'Tuscan Grilled','Mozzarella Stick',
  'Greek Salad','Spinach Salad','Lobster Roll'];
  foodIngredients:string[]=[' Lorem, deren, trataro, filede, nerada',
  ' Lorem, deren, trataro, filede, nerada',
  'A delicate crab cake served on a toasted roll with lettuce and tartar sauce'
  ,'Lorem, deren, trataro, filede, nerada',
  'Grilled chicken with provolone, artichoke hearts, and roasted red pesto'
  ,'Lorem, deren, trataro, filede, nerada',
  'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette'
  ,'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll'


];
  foodImages:string[]=['assets/img/menu/lobster-bisque.jpg',
  'assets/img/menu/bread-barrel.jpg','assets/img/menu/cake.jpg',
  'assets/img/menu/cake.jpg','assets/img/menu/caesar.jpg',
  'assets/img/menu/tuscan-grilled.jpg','assets/img/menu/mozzarella.jpg',
  "assets/img/menu/greek-salad.jpg",'assets/img/menu/spinach-salad.jpg',
  "assets/img/menu/lobster-roll.jpg"
];
  
   foodPrice:number[]=[5.95,6.95,7.95,8.95,9.95,4.95,9.95,9.95,12.95];
  selectedSortOrder: string = "Sort by...";
  categories:string[]=['shorma','juice','burger','kabab'];
  ChangeSortOrder(newSortOrder:any) { 

    console.log(newSortOrder.menu_Category_Id);
    this.GetMenuItemByCategoryId(newSortOrder.menu_Category_Id);
    this.selectedSortOrder = newSortOrder.menu_Category_Name;
  }
  list:any[] = [];
  listCategory:any[]=[];
  defaultSelected = 2
  selection: number=0;
 seasons:string[]=["no","ch","ex"];
 favoriteSeason:string="";
  name:FormControl= new FormControl();
  price1:FormControl= new FormControl();
  price2:FormControl= new FormControl();

constructor(private categorySrvice :MenuitemCategoryService,private menuItemService:MenuitemService,private router:Router,private spinner:NgxSpinnerService) { }






deleteItem(id:number){



 this.menuItemService.deleteMenuItem(id).subscribe(res=>{console.log(res)
this.getAllMenuItem();

})  
}
getAllMenuItem(){
  this.spinner.show();
this.menuItemService.getAllMenuItems().subscribe((res:any[])=>{
this.list=res;
this.spinner.hide();
console.log(res)
});


 }

ngOnInit(): void {


    this.GetMenuCategoryByParentId(-1);
    this.getAllMenuItem();


}



GetMenuCategoryByParentId(ParentId:number){
  this.spinner.show();
  this.categorySrvice.GetMenuCategoryByParentId(ParentId).subscribe((res:any[])=>{console.log(res); this.listCategory=res;
  this.spinner.hide();
  
  });
}
  


 search(){
 let betweePrice:boolean=this.price1.value!=null&&this.price2.value!=null;
 let exName=this.name.value!=null;
 if(betweePrice&&exName){
  switch(this.selection){
     case 0:
      this.GetMenuItemByNameAndBetweenPrice(this.name.value,this.price1.value,this.price2.value);
     break;
     case 1:
      this.GetCheapestMenuItemByNameAndBetweenPrice(this.name.value,this.price1.value,this.price2.value);
     break;
     case 2:
      this.GetExpensiveMenuItemByNameAndBetweenPrice(this.name.value,this.price1.value,this.price2.value);
     break;

  }
//  this.GetMenuItemByNameAndBetweenPrice(this.name.value,this.price1.value,this.price2.value);
 }

 else if(exName) {

  switch(this.selection){
    case 0:
      this.GetMenuItemByName(this.name.value);

    break;
    case 1:
      this.GetCheapestMenuItemByName(this.name.value);

    break;
    case 2:
      this.GetExpensiveMenuItemByName(this.name.value);
    break;

 }
  // this.GetMenuItemByName(this.name.value);

 }
  else if(betweePrice) {

    switch(this.selection){
      case 0:
        this.GetMenuItemByBetweenPrice(this.price1.value,this.price2.value);

      break;
      case 1:
        this.GetCheapestMenuItemByBetweenPrice(this.price1.value,this.price2.value);

      break;
      case 2:
        this.GetExpensiveMenuItemByBetweenPrice(this.price1.value,this.price2.value);
      break;
  // this.GetMenuItemByBetweenPrice(this.price1.value,this.price2.value);

  }}
  else{
    this.getAllMenuItem();
  }
  
 }
GetMenuItemByIdAndName( id:number,  name:string){
this.spinner.show();
 this.menuItemService.GetMenuItemByIdAndName(id,name).subscribe((res:any[])=>{

   console.log(res);  
   this.list=res;
   this.spinner.hide();
 })

 }
 GetMenuItemByCategoryId(id:number){
  this.spinner.show();
  this.menuItemService.GetMenuItemByCategoryId(id).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
    this.spinner.hide();

  })

 }
 GetMenuItemByNameAndBetweenPrice(name:string, price1:number,  price2:number){
 this.spinner.show();
  this.menuItemService.GetMenuItemByNameAndBetweenPrice(name,price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
this.spinner.hide();
  })
  }
 GetMenuItemByBetweenPrice(price1:number, price2:number){
 this.spinner.show();
  this.menuItemService.GetMenuItemByBetweenPrice(price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
this.spinner.hide();
  })
 }

 GetMenuItemByName( name:string){
this.spinner.show();
  this.menuItemService.GetMenuItemByName(name).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
this.spinner.hide();
  })
  }
 GetCheapestMenuItemByIdAndNameAndBetweenPrice( id:number,  name:string,  price1:number,  price2:number){
 this.spinner.show();
  this.menuItemService.GetCheapestMenuItemByIdAndNameAndBetweenPrice(id,name,price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
    this.spinner.hide();

  })
 }
 GetCheapestMenuItemByIdAndName( id:number,name:string){
 
 this.spinner.show();
  this.menuItemService.GetCheapestMenuItemByIdAndName(id,name).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
this.spinner.hide();
  })
  }
 GetCheapestMenuItemById(id:number){

  this.spinner.show();
  this.menuItemService.GetCheapestMenuItemById(id).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;
this.spinner.hide();
  })
  }
 GetCheapestMenuItemByNameAndBetweenPrice(name:string, price1:number, price2:number){
  
  this.spinner.show();
  this.menuItemService.GetCheapestMenuItemByNameAndBetweenPrice(name,price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

    this.spinner.hide();
  })
}
 GetCheapestMenuItemByBetweenPrice( price1:number, price2:number){
  
  this.spinner.show();
  this.menuItemService.GetCheapestMenuItemByBetweenPrice(price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

    this.spinner.hide();
  })
 }
 GetCheapestMenuItemByName( name:string){
  
  this.spinner.show();
  this.menuItemService.GetCheapestMenuItemByName(name).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

    this.spinner.hide();
  })
}
 GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id:number, name:string,  price1:number,  price2:number){
  this.spinner.show()
  this.menuItemService.GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id,name,price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

    this.spinner.hide();
  })
 }
 GetExpensiveMenuItemByIdAndName(id:number,  name:string){
  
  this.spinner.show();
  this.menuItemService.GetExpensiveMenuItemByIdAndName(id,name).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

    this.spinner.hide();
  })
 }
 GetExpensiveMenuItemById( id:number){
  
  this.spinner.show();
  this.menuItemService.GetExpensiveMenuItemById(id).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

    this.spinner.hide();
  })
  }
 GetExpensiveMenuItemByNameAndBetweenPrice( name:string, price1:number,  price2:number){
  this.menuItemService.GetExpensiveMenuItemByNameAndBetweenPrice(name,price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

  })
 }
 GetExpensiveMenuItemByBetweenPrice(price1: number, price2:number){
  this.menuItemService.GetExpensiveMenuItemByBetweenPrice(price1,price2).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

  })
 }
 GetExpensiveMenuItemByName (name:string){
  this.menuItemService.GetExpensiveMenuItemByName(name).subscribe((res:any[])=>{

    console.log(res);  
    this.list=res;

  })
}

}
