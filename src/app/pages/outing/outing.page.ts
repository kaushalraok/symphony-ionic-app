import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outing',
  templateUrl: './outing.page.html',
  styleUrls: ['./outing.page.scss'],
})
export class OutingPage implements OnInit {

  constructor(public modalController: ModalController,private route:Router) { }

  ngOnInit() {
  }

  newRequest()
  {
    this.route.navigateByUrl('/modalpage');
  }

  approveRequest()
  {
    this.route.navigateByUrl('/outingrequest');
  }
}
