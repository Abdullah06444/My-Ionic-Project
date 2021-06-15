import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  public test = "deneme"
  constructor(private http:HttpClient) { }

  myPageTitle(value:any=null){

    return value
  }

  getData():Observable<any>{

    return this.http.get<any>("/assets/data/data.json")
  }

  getCourse():Observable<any>{

    return this.http.get<any>("/assets/data/courses.json")
  }

  getActivity():Observable<any>{

    return this.http.get<any>("/assets/data/activities.json")
  }

  getProvince():Observable<any>{

    return this.http.get<any>("http://koha-app.ekutuphane.gov.tr/api/branches/GetBranchCategoriesList");
  }
  getDistricts(categoryCode:string):Observable<any>{
    
    return this.http.get<any>("http://koha-app.ekutuphane.gov.tr/api/branches/GetBranchRelationList/"+categoryCode);
  }

  

  getHakkimda():Observable<any>{

    return this.http.get<any>("/assets/data/data.json")
  }

  getIcerik():Observable<any>{

    return this.http.get<any>("/assets/data/data.json")
  }
}
