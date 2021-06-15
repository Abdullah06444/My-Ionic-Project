import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { BranchDetailPage } from 'lesson2021/src/app/tab3/branch-detail/branch-detail.page';
import { MyserviceService } from '../services/myservice.service';
import { BranchDetailPage } from './branch-detail/branch-detail.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  iller:any
  detay:any
  sub:boolean
  categoryName:string

  constructor(private service:MyserviceService, public modalCtrl:ModalController) {

    // ilk default degerleri
    this.iller = []
    this.detay = []
    this.sub = false
    this.categoryName = "null"

    this.getProvince()
  }

  getProvince(){

    this.service.getProvince().subscribe(iller=>{

      console.log(iller)
      this.iller = iller
    })
  }

  getDetail(categoryCode,categoryName){
    
    this.sub = !this.sub
    this.categoryName = categoryName
    this.service.getDistricts(categoryCode).subscribe(detay=>{

      console.log(detay)
      this.detay = detay
    })
  }

  async showDetail(detay){

    const modal = await this.modalCtrl.create({
      component: BranchDetailPage,
      componentProps: {
        'detay': detay
      },
      cssClass: 'my-custom-class'
    })
    return await modal.present()
    console.log(detay)
  }
}
