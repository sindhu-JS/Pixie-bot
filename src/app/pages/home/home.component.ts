import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DesignService } from './designservice';
import {design} from './design';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  design: design[] = [];
  responsiveOptions;
  constructor(private designService: DesignService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
   }

  ngOnInit(): void {
    this.designService.getProductsSmall().then(design => {
			this.design = design;
		});
  }

}
