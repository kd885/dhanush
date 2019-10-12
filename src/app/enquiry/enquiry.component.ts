import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  formData = {
    country:'India',
    name:'',
    email:'',
    phone:'',
    address:'',
    interested:'Throws',
    requirements:''
  }
  formSent:boolean = false;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  sendMail(e){
    e.preventDefault();
    if(!this.formData.name.trim()){
      $('#name').focus();
      return false;
    }
    if(!this.formData.email.trim()){
      $('#email').focus();
      return false;
    }
    if(!this.formData.phone.toString().trim()){
      $('#phone').focus();
      return false;
    }
    if(!this.formData.address.trim()){
      $('#address').focus();
      return false;
    }
    if(!this.formData.interested){
      $('#s1').focus();
      return false;
    }
    if(!this.formData.country){
      $('#s2').focus();
      return false;
    }
    if(!this.formData.requirements.trim()){
      $('#describe').focus();
      return false;
    }
    let data = new FormData();
    for (var key in this.formData){
      data.append(key, this.formData[key]);
    }
    this.http.post('https://dikshastro.com/maildhanush.php', data).subscribe((res)=>{
      console.log(res);
      $('form')[0].reset();
      this.formSent = true;
      setTimeout(()=>{
        this.formSent = false;
      },5000);
    }, (err)=>{
      console.log(err);
    })
  }

}
