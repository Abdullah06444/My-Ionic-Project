import { Component, OnInit } from '@angular/core'
import { MyserviceService } from '../services/myservice.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // işlemleri yaptığımız, variable, fonksiyon tanımladığımız scope alanı

  contactForm: FormGroup

  pageTitle: any
  inputt: any
  name: any
  page: {

    id:number,
    title:string,
    url:string,
    status:boolean
  }

  flag:number
  sayfa:any

  constructor(private myservice:MyserviceService, private formBuilder: FormBuilder) {
    this.pageTitle = "Ana Sayfa"
    //this.name = '';
    //this.firstFunction();
    //this.page.id = 1// şeklinde yazdırabiliriz, html içinde de {{page.id}} yazabiliriz
    //this.page.title = "page.title Başlık"
    //this.page.url = "https://abdullahgur.com.tr"
    //this.page.status = true
  }
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group(
      {

        adsoyad: new FormControl("",Validators.required), // boş bırakılmaması için valid require
        eposta: new FormControl("",[Validators.required,Validators.email]), // boş bırakamaz, valid bir posta olmalı
        telefon: new FormControl(""),
        mesaj: new FormControl("",[Validators.required,Validators.minLength(25),Validators.maxLength(500)])

      }
    )
  }

  mesajGonder(){
    if(this.contactForm.valid)
    {
      alertify.set('notifier','position','top-center')
      alertify.set('notifier','delay',10)
      alertify.success("Başarılı oldu. Teşekkürler.")
      alert("Başarılı bir şekilde gönderildi.")
    }
    else
    {
      alertify.set('notifier','position','top-center')
      alertify.error("Başarısız oldu. Tekrar deneyiniz.")
    }
  }

  firstFunction(){

    this.pageTitle = "Diğer Sayfa"
  }

  secondFunction(value:any = this.pageTitle){

    this.pageTitle = value
  }



  getHocalar(){

    this.flag = 1
  }

  getHakkimda(){

    this.myservice.getHakkimda().subscribe(gelenSayfa=>{

      this.flag = 2

      this.sayfa = gelenSayfa.data
    })
  }

  getIcerik(){

    this.myservice.getIcerik().subscribe(gelenSayfa=>{

      this.flag = 3

      this.sayfa = gelenSayfa.data
    })
  }

  getIletisim(){

    this.flag=4
  }

  onClick(){

    console.log(this.inputt + " kaydedildi")
    this.name = this.inputt
  }
}
