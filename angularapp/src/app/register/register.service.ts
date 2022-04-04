import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {User} from './user';
import {Register} from './register';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseURL = "http://localhost:8080/api/register";
  constructor(private httpClient: HttpClient) { }
  getRegisterList(): Observable<Register[]>{
    return this.httpClient.get<Register[]>(`${this.baseURL}`);
  }
  createRegister(register: Register): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, register);
  }
  getRegisterById(id: number): Observable<Register>{
    return this.httpClient.get<Register>(`${this.baseURL}/${id}`);
  }
  updateRegister(id: number, register: Register): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, register);
  }
  deleteRegister(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
