import { Injectable } from '@angular/core';

console.log('AuthLibService OUTSIDE');

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string;

  public get user(): string {
    return this.userName;
  }

  constructor() {
    console.log('AuthLibService INSIDE');
  }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }

  public echo(params: any): void {
    console.log(params);
  }

}
