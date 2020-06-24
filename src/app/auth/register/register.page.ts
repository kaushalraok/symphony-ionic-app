import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private vibration: Vibration,private http: HttpClient,private route: Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  register(form: NgForm)
  {
    
    this.http.post('http://localhost:8080/students/insert',form.value).subscribe(async (data)=>{
      console.log(data);
      if(data!=null)
      {
        this.vibration.vibrate(1000);
        const toast = await this.toastController.create({
          message: 'Registered Successfully !',
          duration: 2000
        });
        toast.present();
    
      this.route.navigate(['/login']);
      }
    })
  }
}
