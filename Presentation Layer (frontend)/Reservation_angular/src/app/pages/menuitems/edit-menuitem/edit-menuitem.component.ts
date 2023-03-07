import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MenuitemService } from 'src/app/service/menuitem.service';
import { MenuItem } from 'src/data/menuItem';

@Component({
  selector: 'app-edit-menuitem',
  templateUrl: './edit-menuitem.component.html',
  styleUrls: ['./edit-menuitem.component.css']
})
export class EditMenuitemComponent implements OnInit {
    editId:number=0;
  editMenuItemForm= new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    content:new FormControl(),
    creatdate:new FormControl(),
    quantity:new FormControl(),
    image:new FormControl(),
    menuId:new FormControl()
  });
list:any[]=[];
  editMenuItem(){
    let menuItem:MenuItem=new MenuItem();
 
    menuItem.Menu_Item_Id=this.list[0].menu_Item_Id;
    menuItem.Menu_Item_Name=this.editMenuItemForm.controls['name'].value;
    menuItem.Menu_Item_Price=Number.parseFloat(this.editMenuItemForm.controls['price'].value);
    menuItem.Menu_Item_Createdat=this.list[0].menu_Item_Createdat;
    menuItem.Menu_Item_Content=this.editMenuItemForm.controls['content'].value;
    menuItem.Menu_Item_Quantity=Number.parseInt(this.editMenuItemForm.controls['quantity'].value);
    console.log(menuItem.Menu_Item_Price)
    this.menuItemService.editMenuItem(menuItem).subscribe(res=>{

      console.log(res);
    })


  }

getMenuItemById(){

    this.route.params.subscribe(params=>{
    this.editId=params['id'];

    this.menuItemService.getMenuItemById(this.editId).subscribe((res:any[])=>{
    this.list=res;
    console.log(this.list)
    console.log(this.list[0].menu_Id+"aaaaaa");
    })
     console.log(this.editId)

    })

}

  constructor(private menuItemService:MenuitemService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMenuItemById();
  }

}
