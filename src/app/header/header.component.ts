import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerHeight=0;
  constructor(public router:Router, public route:ActivatedRoute) { }

  ngOnInit() {
    $(window).scroll((e) => {
      this.headerHeight =  $('header').height();
      if($(e.target).scrollTop() > $('.banner-sec').offset().top + $('.banner-sec').outerHeight()){
          $('header').addClass('fixed');         
          this.headerHeight =  $('header').height();
      }
      else{          
          $('header').removeClass('fixed');
          this.headerHeight =  $('header').height();
      }
  });
  
  }
  closeMenu(){
    $('#navbarSupportedContent').attr("aria-expanded", 'false');
    $('#navbarSupportedContent').removeClass('show');
  }

}
