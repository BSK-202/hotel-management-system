import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hia-rooms-list',
  imports: [CommonModule],
  templateUrl: './rooms-list.html',
  styleUrl: './rooms-list.css',
})
export class RoomsList {

  // rooms become a property of selector 
  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  // In case we need transfert a table
  //@Output() selectedRoom = new EventEmitter<RoomList[]>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
