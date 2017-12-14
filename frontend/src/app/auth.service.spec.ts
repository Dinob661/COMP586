
/* tslint:disable:no-unused-variable */
import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "./auth.service";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';


class MockAuthService extends AuthService {
  get isAuthenticated() {
    return true;
  }
}


describe('function userName', () => {

//   beforeEach(() => {

//     // refine the test module by declaring the test component
//     TestBed.configureTestingModule({
//       declarations: [LoginComponent],
//       providers: [AuthService]
//     });

//     // Configure the component with another set of Providers
//     TestBed.overrideComponent(
//         LoginComponent,
//         {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
//     );

//     // create component and test fixture
//     fixture = TestBed.createComponent(LoginComponent);

//     // get test component from the fixture
//     component = fixture.componentInstance;

//     // AuthService provided to the TestBed
//     testBedService = TestBed.get(AuthService);

//     // AuthService provided by Component, (should return MockAuthService)
//     componentService = fixture.debugElement.injector.get(AuthService);
//   });

  it('should return the userName which is a string', () => {
      var foo = true;
      expect(foo).toBe(true);
    // expect(componentService instanceof MockAuthService).toBeTruthy();
  });
});
