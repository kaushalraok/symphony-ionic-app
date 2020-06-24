import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Storage } from '@ionic/storage';
import { Profile } from 'src/app/interface/Profile';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  data:any;
  studentId:any;
  profile : any = new Profile();

  constructor(private storage:Storage,private vibration: Vibration,private http: HttpClient,private route: Router,public toastController: ToastController) { }

  ngOnInit() {
    this.data="true";
    this.storage.get('studentId').then((val) => {
    this.http.get('http://192.168.0.104:8080/students/'+parseInt(val)).subscribe(async (data)=>{
      console.log(data);
      this.profile =  (data);
      console.log(this.profile);
    })
  });
  }
  
  edit()
  {
    this.data="false";
  }
  submit(form: NgForm)
  { 
  //   this.http.post('http://192.168.0.104:8080/students/insert',form.value).subscribe(async (data)=>{
  //     console.log(data);
  //     if(data!=null)
  //     {
  //       this.vibration.vibrate(1000);
  //       const toast = await this.toastController.create({
  //         message: 'Registered Successfully !',
  //         duration: 2000
  //       });
  //       toast.present();
    
  //     this.route.navigate(['/login']);
  //     }
  //   })
   }
}
