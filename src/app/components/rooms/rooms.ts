import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hia-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.css',
})
export class Rooms implements OnInit{

hotelName = 'Rosewood Hong Kong';//binding interpolation
numberOfRooms = 10;//prperty binding
hiddenRooms = false;//always in DOM

//rooms: Room | undefined;
rooms: Room = {
  totalRooms: 15,
  availableRooms: 10,
  bookedRooms: 5
}

roomList: RoomList[] = [];

constructor(){}
ngOnInit(): void {

  this.roomList = [
    {
    roomNumber: 101,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV, Mini Bar',
    price: 200,
    photos: 'https://images.pexels.com/photos/5860693/pexels-photo-5860693.jpeg?cs=srgb',
    checkinTime: new Date('2024-06-01T14:00:00'),
    checkoutTime: new Date('2024-06-02T12:00:00'),
    rating: 3.4
  },
  {
    roomNumber: 102,
    roomType: 'Executive Suite',
    amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV, Mini Bar, Jacuzzi',
    price: 400,
    photos: 'https://www.hilton.com/im/en/JUZHIHI/27188121/k1dru1-k1tru1-king-premium-suite-1.jpg?impolicy=crop&cw=4000&ch=2666&gravity=NorthWest&xposition=0&yposition=166&rw=640&rh=427',
    checkinTime: new Date('2024-06-01T14:00:00'),
    checkoutTime: new Date('2024-06-02T12:00:00'),
    rating: 2.6
  },
  {
    roomNumber: 103,
    roomType: 'Presidential Suite',
    amenities: 'Air Conditioning, Free Wi-Fi, Flat-screen TV, Mini Bar, Jacuzzi, Private Pool',
    price: 1000,
    photos: 'https://th.bing.com/th/id/R.3183e5723d69414a2aa534da8f89f256?rik=j9VlCatXYjzR9g&pid=ImgRaw&r=0',
    checkinTime: new Date('2024-06-01T14:00:00'),
    checkoutTime: new Date('2024-06-02T12:00:00'),
    rating: 1.5
  }
  ]
  
}
toggle(){ //event binding
   this.hiddenRooms = !this.hiddenRooms;
}


}
