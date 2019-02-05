import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
//import Waypoint from 'waypoints';
@Component({
  selector: 'app-basic-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss',
    '../../../../assets/animations/animate.css'
  ]
})
export class LandingComponent implements OnInit {
  constructor() {}

  getViewport() {
    let size;
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      viewport = {
        size: size,
        width: w,
        height: h
      },
      views = {
        'xsmall': 320,
        'small': 768,
        'medium': 1024,
        'large': 1200
      };

    if ($('html').hasClass('lt-ie9')) {
      size = 'large';
    } else {
      size = (w <= views.xsmall) ? 'xsmall' : size;
      size = (w > views.xsmall && w < views.small) ? 'small' : size;
      size = (w >= views.small && w < views.medium) ? 'medium' : size;
      size = (w >= views.medium) ? 'large' : size;
      size = (w >= views.large) ? 'xlarge' : size;
    }

    viewport.size = size;

    return viewport;
  }

  isMobileView() {
    return this.isMobile(this.getViewport().size);
  }

  isMobile(size) {
    return (size === 'small' || size === 'xsmall');
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    $(document).ready(function() {
      var element = $('.animateContent > div');
      element.css({
        transition: 'all 0.7s',
        transform: 'translateY(0)'
      });

      setTimeout(function() {
        element.css({ transition: 'none' });
      }, 700);
      scrollPos($('#to-top'));
      $(window).scroll(function() {
        scrollPos($('#to-top'));
      });
      $('#to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
      });

      $('.mobileNav').click(function(e) {
        e.preventDefault();
        $(this)
          .parent('nav')
          .toggleClass('showNav');
      });
    });
  }
}
function scrollPos(elm) {
  if ($(window).scrollTop() > 350) {
    elm.addClass('show');
  } else {
    elm.removeClass('show');
  }
}
