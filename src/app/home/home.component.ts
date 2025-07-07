import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounceLeftRight', [
      transition(':enter, * => *', [
        animate(
          '2.5s infinite',
          keyframes([
            style({ transform: 'translateX(0) scale(1)', offset: 0 }),
            style({ transform: 'translateX(25px) scale(1.05)', offset: 0.2 }),
            style({ transform: 'translateX(-20px) scale(0.95)', offset: 0.4 }),
            style({ transform: 'translateX(20px) scale(1.03)', offset: 0.6 }),
            style({ transform: 'translateX(-10px) scale(0.98)', offset: 0.8 }),
            style({ transform: 'translateX(0) scale(1)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class HomeComponent {
featuredMenu = [
  {
    image: '../../assets/kati-kati-cameroon (1).jpeg',
    name: 'Fufu-corn and Khati Khati',
    description: 'Tender grilled chicken served with creamy garlic pasta.'
  },
  {
    image: '../../assets/f3.jpeg',
    name: 'Garri and Eru',
    description: 'A mix of prawns, fish & calamari with spicy dip.'
  },
  {
    image: '../../assets/f1.jpeg',
    name: 'Rice and Chicken',
    description: 'Eggs, sausages, beans, and toast to kickstart your day.'
  },
  {
    image: '../../assets/ekwang.jpeg',
    name: 'Ekwang',
    description: 'made with cocoa leaf, dried oil, cocoa, red oil'
  }
];


  slides = [
    { image: '../../assets/food.jpg', label: 'Breakfast Moments' },
    { image: '../../assets/b.jpeg', label: 'Lunch Vibes' },
    { image: '../../assets/b2.jpeg', label: 'Delightful Breakfast' },
    { image: '../../assets/fam.jpeg', label: 'Satisfying Lunch' }
  ];

  currentIndex = 0;

  categories = ['Available', 'Breakfast', 'Lunch'];
  selectedCategory = 'Available';
  activeCategory: string = 'all';

  dishes = [
    { title: 'Dish 1', category: 'All Menu', image: 'assets/dish1.jpg' },
    { title: 'Dish 2', category: 'Breakfast', image: 'assets/dish2.jpg' },
    { title: 'Dish 3', category: 'Lunch', image: 'assets/dish3.jpg' },
    { title: 'Dish 4', category: 'Available', image: 'assets/dish4.jpg' }
  ];

  allMenu = [
    { image: '../../assets/d4.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/d1.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/d2.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/d3.jpeg', name: 'Jollof Rice' }
  ];

  breakfastMenu = [
    { image: '../../assets/br.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/br1.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/br2.jpeg', name: 'Jollof Rice' }
  ];

  lunchMenu = [
    { image: '../../assets/d4.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/d1.jpeg', name: 'Jollof Rice' },
    { image: '../../assets/d2.jpeg', name: 'Jollof Rice' }
  ];

  constructor() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 4000);
  }

  showCategory(category: string): void {
    this.activeCategory = category;
  }

  get filteredDishes() {
    return this.dishes.filter(d => d.category === this.selectedCategory);
  }
}
