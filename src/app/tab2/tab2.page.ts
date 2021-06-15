import { Component } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { ApiService} from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pageTitle:any;
  data:any;
  products:any;
  courses:any;
  activities:any;

  dataDiv:boolean = false;
  coursesDiv:boolean = false;
  activitiesDiv:boolean = false;
  flag:number
  count:number

  constructor(private myservice:MyserviceService, private api:ApiService) {

    this.pageTitle = this.myservice.myPageTitle("İkinci Sayfa")
    this.count = 0
    //this.getData()
  }

  getData(){

    this.myservice.getData().subscribe(gelenData=>{ 
      // subscribe özelliği ile json'dan getData'dan gelen veriyi parçalara ayırmasını isteyeceğiz

      this.dataDiv = true
      this.coursesDiv = false
      this.activitiesDiv = false
      this.flag = 1

      console.log(gelenData) // console da görmek için
      this.data = gelenData.data // geleni buradaki data değişkenimize attık
    })
  }

  getCourse(){

    this.myservice.getCourse().subscribe(gelenCourse=>{

      this.dataDiv = false
      this.coursesDiv = true
      this.activitiesDiv = false
      this.flag = 2

      console.log(gelenCourse)
      this.courses = gelenCourse.courses // courses.json'daki kursları getirir.
    })
  }

  getActivity(){

    this.myservice.getActivity().subscribe(gelenActivity=>{

      this.dataDiv = false
      this.coursesDiv = false
      this.activitiesDiv = true
      this.flag = 3

      console.log(gelenActivity)
      this.activities = gelenActivity.activities// activities.json'daki kursları getirir.
    })
  }


}
