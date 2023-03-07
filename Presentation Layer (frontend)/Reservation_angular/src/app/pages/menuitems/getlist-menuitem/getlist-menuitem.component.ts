import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuitemService } from 'src/app/service/menuitem.service';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-getlist-menuitem',
  templateUrl: './getlist-menuitem.component.html',
  styleUrls: ['./getlist-menuitem.component.css']
})
export class GetlistMenuitemComponent implements OnInit {
   list:any[] = [];
    defaultSelected = 2
    selection: number=0;
   seasons:string[]=["none","cheapest","expensive"];
   favoriteSeason:string="";
    name:FormControl= new FormControl();
    price1:FormControl= new FormControl();
    price2:FormControl= new FormControl();
  
  constructor(private menuItemService:MenuitemService,private router:Router,private spinner :NgxSpinnerService) { }






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
});


   }

  ngOnInit(): void {
  

      this.getAllMenuItem();
 
  
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

   this.menuItemService.GetMenuItemByIdAndName(id,name).subscribe((res:any[])=>{

     console.log(res);  
     this.list=res;

   })

   }
   GetMenuItemByCategoryId(id:number){

    this.menuItemService.GetMenuItemByCategoryId(id).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
 
   }
   GetMenuItemByNameAndBetweenPrice(name:string, price1:number,  price2:number){
    this.menuItemService.GetMenuItemByNameAndBetweenPrice(name,price1,price2).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
    }
   GetMenuItemByBetweenPrice(price1:number, price2:number){
    this.menuItemService.GetMenuItemByBetweenPrice(price1,price2).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
   }

   GetMenuItemByName( name:string){
    this.menuItemService.GetMenuItemByName(name).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
    }
   GetCheapestMenuItemByIdAndNameAndBetweenPrice( id:number,  name:string,  price1:number,  price2:number){
    this.menuItemService.GetCheapestMenuItemByIdAndNameAndBetweenPrice(id,name,price1,price2).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
   }
   GetCheapestMenuItemByIdAndName( id:number,name:string){
    this.menuItemService.GetCheapestMenuItemByIdAndName(id,name).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
    }
   GetCheapestMenuItemById(id:number){
    this.menuItemService.GetCheapestMenuItemById(id).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
    }
   GetCheapestMenuItemByNameAndBetweenPrice(name:string, price1:number, price2:number){
    this.menuItemService.GetCheapestMenuItemByNameAndBetweenPrice(name,price1,price2).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
  }
   GetCheapestMenuItemByBetweenPrice( price1:number, price2:number){
    this.menuItemService.GetCheapestMenuItemByBetweenPrice(price1,price2).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
   }
   GetCheapestMenuItemByName( name:string){
    this.menuItemService.GetCheapestMenuItemByName(name).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
  }
   GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id:number, name:string,  price1:number,  price2:number){
    this.menuItemService.GetExpensiveMenuItemByIdAndNameAndBetweenPrice(id,name,price1,price2).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
   }
   GetExpensiveMenuItemByIdAndName(id:number,  name:string){
    this.menuItemService.GetExpensiveMenuItemByIdAndName(id,name).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
    })
   }
   GetExpensiveMenuItemById( id:number){
    this.menuItemService.GetExpensiveMenuItemById(id).subscribe((res:any[])=>{

      console.log(res);  
      this.list=res;
 
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
