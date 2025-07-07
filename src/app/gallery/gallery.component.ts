import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryImages = [
    { src: 'assets/gallery/food1.jpg', caption: 'Our Signature Jollof' },
    { src: 'assets/gallery/interior1.jpg', caption: 'Warm & Classy Ambience' },
    { src: 'assets/gallery/group1.jpg', caption: 'Celebrating Moments' },
    { src: 'assets/gallery/food2.jpg', caption: 'Sizzling Grilled Chicken' },
    { src: 'assets/gallery/fun1.jpg', caption: 'Laughter & Luxury' },
    { src: 'assets/gallery/dessert1.jpg', caption: 'Sweet Treats, Always' },
    { src: 'assets/gallery/drink1.jpg', caption: 'Fresh Smoothies' },
    { src: 'assets/gallery/family.jpg', caption: 'Family Dining Experience' }
  ];
}
