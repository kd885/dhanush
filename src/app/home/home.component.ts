import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
    $('.owl-carousel-3').owlCarousel({
      autoplay:false,
      autoplayTimeout:4000,
      autoplayHoverPause:false,      
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: false,
              dots: false,
          },
          600: {
              items: 1,
              nav: false,
              dots: false,
          },
          1000: {
              items: 1,
              nav: false,
              dots: true,
          }
      }
  });
  },1000)
}

  }


