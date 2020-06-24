import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private http: HttpClient,private route: Router,public toastController: ToastController,private storage: Storage) { }
  phnum:any;

  pass:any;
  ngOnInit() {
  }
  login() {
    this.http.get('http://localhost:8080/students/login/'+this.phnum+'/'+this.pass).subscribe(async (data)=>{
      console.log(data);
      if(data!=null)
      {
        this.storage.set('studentId', data);
        this.storage.get('studentId').then((val) => {
          console.log('student id is', val);
        });
        const toast = await this.toastController.create({
          message: 'Logged in Successfully !',
          duration: 2000
        });
        toast.present();
    
      this.route.navigate(['/menu']);
      }
      else
      {
        const toast = await this.toastController.create({
          message: 'Invalid Credentials !',
          duration: 2000
        });
        toast.present();
      }
    })
  }
}
