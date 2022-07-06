import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DesignService } from './designservice';
import {design} from './design';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  design: design[] = [];
  responsiveOptions;
  constructor(private designService: DesignService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
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
