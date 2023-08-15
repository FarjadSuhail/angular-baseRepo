import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) { }

  // public authenticate(payload): Observable<any> {
  //   const response: any = this.http.post<any>(
  //     environment.BASE_URL + "auth/authenticate",
  //     payload
  //   );
  //   return response;
  // }

}
