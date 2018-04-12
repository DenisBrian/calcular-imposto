import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import "rxjs/Rx";


@Injectable()
export class FuncionarioService {

  constructor(private http: Http) { }
 

  postFuncionario(obj) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:49795/api/funcionario/v1',JSON.stringify(obj),options)
      .map(res => res.json())
      .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
