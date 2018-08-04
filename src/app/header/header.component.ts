import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor() {
    
    
  }

  ngOnInit() {
    
    
    $( "li" ).hover(
      function() {
          $(this).find("span").stop().animate({
          width:"100%",
          opacity:"1",
        }, 400, function () {
        })
      }, function() {
          $(this).find("span").stop().animate({
          width:"0%",
          opacity:"0",
        }, 400, function () {
        })
      }
    );
    
    
  }

}
