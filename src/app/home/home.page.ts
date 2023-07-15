import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent, Platform } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, MessageComponent],
})
export class HomePage {
  private data = inject(DataService);
  private platform = inject(Platform);
  constructor() {
    this.getDeviceSize();
  }

  getDeviceSize(): number {
    let colSize = 0, width = this.platform.width();
    if (width > 480 && width < 767) {
      colSize = 2;
    } else if (width > 768) {
      colSize = 3;
    }
    return colSize;
  }

}
