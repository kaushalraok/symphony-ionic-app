import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modalpage',
  templateUrl: './modalpage.page.html',
  styleUrls: ['./modalpage.page.scss'],
})
export class ModalpagePage implements OnInit {
  date:any;
  description:any;
  constructor(private storage: Storage,private http: HttpClient,private route: Router,public toastController: ToastController) { }

  ngOnInit() {
  }

  submit(form: NgForm)
  {
    form.value.request_id = 0;
    this.http.post('http://192.168.0.104:8080/outingrequest/insert',form.value).subscribe(async (data)=>{
      console.log(data);
      if(data!=null)
      {
        this.storage.set('request_id',data);
        const toast = await this.toastController.create({
          message: 'Request Raised Successfully !',
          duration: 2000
        });
        toast.present();
      }
    })
  }
}
