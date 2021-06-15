import { Component, Input, OnInit } from '@angular/core';
// import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.page.html',
  styleUrls: ['./branch-detail.page.scss'],
})
export class BranchDetailPage implements OnInit {

  @Input() detay: any;

  constructor(
    private modalCtrl:ModalController
    //private email:EmailComposer
    ) {

  }

  ngOnInit(){
      console.log(this.detay)
  }

  dismiss(){
    this.modalCtrl.dismiss()

  }

}
