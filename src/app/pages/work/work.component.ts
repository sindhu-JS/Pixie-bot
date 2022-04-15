import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  images: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.images = [
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria1s.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria2.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria2s.jpg',
        alt: 'Description for Image 2',
        title: 'Title 2',
      },
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria3.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria3s.jpg',
        alt: 'Description for Image 3',
        title: 'Title 3',
      },
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria4.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria4s.jpg',
        alt: 'Description for Image 4',
        title: 'Title 4',
      },
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria5.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria5s.jpg',
        alt: 'Description for Image 5',
        title: 'Title 5',
      },
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria6.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria6s.jpg',
        alt: 'Description for Image 6',
        title: 'Title 6',
      },
      {
        previewImageSrc: 'assets/demo/images/galleria/galleria7.jpg',
        thumbnailImageSrc: 'assets/demo/images/galleria/galleria7s.jpg',
        alt: 'Description for Image 7',
        title: 'Title 7',
      },
    ];
  }
}
