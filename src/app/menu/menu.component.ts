import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [NgFor, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  weeklyMenu = [
  {
    dayName: 'Tuesday',
    items: [
      {
        name: 'Rice and Chicken sauce',
        description: 'With spicy mayo & fries',
        image: '../../assets/rc.jpeg'
      },
      {
        name: 'Garri and Eru',
        description: 'Rich african taste',
        image: '../../assets/ge.jpeg'
      }
    ]
  },
  {
    dayName: 'Wednesday',
    items: [
      {
        name: 'Ndole(vegetable)',
        description: 'Served with plantains',
        image: '../../assets/ndole.jpeg'
      },
      {
        name: 'Kwacocoa',
        description: 'Served with canda sauce',
        image: '../../assets/kwaco.jpeg'
      }
    ]
  },
  {
    dayName: 'Thursday',
    items: [
      {
        name: 'Fufu corn and vegetable',
        description: 'made with corn, served with chicken',
        image: '../../assets/kati-kati-cameroon (1).jpeg'
      },
      {
        name: 'Ekwang',
        description: 'original African meal',
        image: '../../assets/ekwang.jpeg'
      }
    ]
  },
  {
    dayName: 'Friday',
    items: [
      {
        name: 'Kwacoca and banga soup',
        description: 'Bakweri traditional meal',
        image: '../../assets/kb.jpeg'
      },
      {
        name: 'Garri and Okro',
        description: 'served with  meat, stock fish and Kanda',
        image: '../../assets/ge.jpeg'
      }
    ]
  },
  {
    dayName: 'Saturday',
    items: [
      {
        name: 'Fufu corn and vegetable',
        description: 'made with corn',
        image: '../../assets/kati-kati-cameroon (1).jpeg'
      },
      {
        name: 'Peppered chicken and fried plantains',
        description: 'Very Delicious!!',
        image: '../../assets/rc.jpeg'
      }
    ]
  },
  {
    dayName: 'Sunday',
    items: [
      {
        name: 'rice and chicken sauce',
        description: 'Served with white beans',
        image: '../../assets/rc.jpeg'
      },
      {
        name: 'Garri and Eru',
        description: 'Served with alot of meat(obstacles)',
        image: '../../assets/ge.jpeg'
      }
    ]
  },
  // Continue for rest of the week...
  ]

  // Add for Wednesday – Sunday similarly


}
