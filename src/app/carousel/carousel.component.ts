import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ NgClass, CommonModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})


export class CarouselComponent {
  images: {url: string, thumbnail: string}[] = [
    {
      url: 'assets/images/image-product-1.jpg',
      thumbnail: 'assets/images/image-product-1-thumbnail.jpg'
    },
    {
      url: 'assets/images/image-product-2.jpg',
      thumbnail: 'assets/images/image-product-2-thumbnail.jpg'
    },
    {
      url: 'assets/images/image-product-3.jpg',
      thumbnail: 'assets/images/image-product-3-thumbnail.jpg'
    },
    {
      url: 'assets/images/image-product-4.jpg',
      thumbnail: 'assets/images/image-product-4-thumbnail.jpg'
    }
  ];

  
  displayedImage: string = this.images.at(0)!.url;
  fadeImage: boolean = false;
  isOpen: boolean = false;

  switchImage(image: {url: string, thumbnail: string}): void {
    this.displayedImage = image.url;
    this.fadeImage = !this.fadeImage;
  }

  nextImage(): void {
    const indx = this.images.findIndex(img => img.url === this.displayedImage);

    if (indx + 1 === this.images.length)
      this.displayedImage = this.images.at(0)!.url;
    else
      this.displayedImage = this.images.at(indx + 1)!.url;
      
    this.fadeImage = !this.fadeImage;
  }

  previousImage(): void {
    const indx = this.images.findIndex(img => img.url === this.displayedImage);

    if (indx - 1 < 0)
      this.displayedImage = this.images.at(this.images.length - 1)!.url;
    else
      this.displayedImage = this.images.at(indx - 1)!.url;
      
    this.fadeImage = !this.fadeImage;
  }

  toggleCarousel(carousel: boolean = false): void {
    if(!carousel) this.isOpen = !this.isOpen;
  }
}