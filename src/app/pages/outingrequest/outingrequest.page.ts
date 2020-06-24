import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { OutingRequest } from 'src/app/interface/OutingRequest';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-outingrequest',
  templateUrl: './outingrequest.page.html',
  styleUrls: ['./outingrequest.page.scss'],
})
export class OutingrequestPage implements OnInit {
  requestForm: FormGroup;
  requestid:any;
  request: any;
  request1 : OutingRequest = new OutingRequest;
  constructor(private storage: Storage,private http: HttpClient,private route: Router,public toastController: ToastController) { }

  ngOnInit() {
    this.formControl();
    this.storage.get('request_id').then((value) => {

    console.log(this.requestid);
    this.http.get('http://localhost:8080/outingrequest/'+value).subscribe(async (data)=>{
      console.log(data);
      this.request = data;
      this.request1.request_id = this.request.request_id;
      this.request1.date = this.request.date;
      this.request1.description = this.request.description;
      console.log(this.request.description);
    })
  })
  }
  formControl()
  {
    this.requestForm = new FormGroup({
      parents_remarks: new FormControl(''),

    })
  }
  accept(form: NgForm)
  {
    this.request1.parents_remarks = form.value.parents_remarks;
    this.request1.status = "Accepted";
    this.http.post('http://192.168.0.104:8080/outingrequest/insert',this.request1).subscribe(async (data)=>{
      console.log(data);
      if(data!=null)
      {
        const toast = await this.toastController.create({
          message: 'Outing Request Updated Successfully !',
          duration: 2000
        });
        toast.present();
        this.route.navigateByUrl('/outing');
      }
    })

  }

  reject(form: NgForm)
  {
    this.request1.parents_remarks = form.value.parents_remarks;
    this.request1.status = "Declined";
    this.http.post('http://localhost:8080/outingrequest/insert',this.request1).subscribe(async (data)=>{
      console.log(data);
      if(data!=null)
      {
        const toast = await this.toastController.create({
          message: 'Outing Request Updated Successfully !',
          duration: 2000
        });
        toast.present();
        this.route.navigateByUrl('/outing');
      }
    })

  }



}
