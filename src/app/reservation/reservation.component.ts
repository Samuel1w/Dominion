import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservation = {
    name: '',
    email: '',
    phone: '',
    guests: 1,
    date: '',
    time: '',
  };

  foodMenu = [
    { name: 'Jollof Rice', id: 1 },
    { name: 'Eru & Fufu', id: 2 },
    { name: 'Grilled Chicken', id: 3 },
    { name: 'Fruit Smoothie', id: 4 },
  ];

  selectedFoodId: number | null = null;
  quantity: number = 1;
  orderList: { food: string, quantity: number }[] = [];

  addToOrder() {
    const selected = this.foodMenu.find(item => item.id === this.selectedFoodId);
    if (selected) {
      this.orderList.push({ food: selected.name, quantity: this.quantity });
      this.selectedFoodId = null;
      this.quantity = 1;
    }
  }

  submitReservation() {
    console.log('Reservation:', this.reservation);
    console.log('Order:', this.orderList);
    alert('Reservation Submitted!');
  }
}
