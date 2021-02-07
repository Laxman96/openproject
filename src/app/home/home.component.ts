import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toolbarchange=false; 
  @HostListener("document:scroll") onscroll(){

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.toolbarchange=true
    }
    else{
      this.toolbarchange=false;
    }
  }


}
