import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleMobileMenu():void {
    console.log("toggleMobileMenu");
    const hamburger = document.getElementById('hamburger-icon');

    if (hamburger != null) {
      hamburger.classList.toggle('open');
    }
    
    //menu.classList.toggle('open');
}
}
