import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuitemService } from 'src/app/service/menuitem.service';

@Component({
  selector: 'app-show-menuitem',
  templateUrl: './show-menuitem.component.html',
  styleUrls: ['./show-menuitem.component.css']
})
export class ShowMenuitemComponent implements OnInit {
   item:any;
   editId=0;
  constructor(private route:ActivatedRoute,private menuItemService:MenuitemService) { }
  
getMenuItemById(){

  this.route.params.subscribe(params=>{
  this.editId=params['id'];

  this.menuItemService.getMenuItemById(this.editId).subscribe((res:any[])=>{
  this.item=res[0];
  console.log(this.item)
  })
   console.log(this.editId)

  })

}


  ngOnInit(): void {
this.getMenuItemById();    
  }

}
