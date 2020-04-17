import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from'rxjs';
//above are the imports that were necessary in order for the json data to be accessed
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:HttpClient) { }
  //here there are 3 different functions. each one accesses a separate json file. returning either the pl table data
  //the goals data or the assists data
  getPremierData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/3de3d200-75cc-11ea-9538-c15f13cc5ca9');
  }
  getGoals():Observable<any>{
  return this.http.get('https://jsonblob.com/api/jsonblob/f8db0720-7b38-11ea-a2ae-293e223d0581');
  }
  getAssists():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/47e987a5-7d94-11ea-9563-83a22f2eedd1');
  }
}
