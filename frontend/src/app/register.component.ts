import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styles: [`
                .error{bacground-color: #fff0f0
                }
            `]
})
export class RegisterComponent { 
    form;

    constructor(private fb: FormBuilder, private auth: AuthService) {
        this.form = fb.group({
            Id: ['',Validators.required],
            userName: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, emailValid()]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, {validator: matchingFields("password", "confirmPassword")})
    }

    onSubmit() {
        this.form.controls['Id'].setValue("UserID"+(new Date()).toLocaleString('en-US'));
        console.log(this.form.errors);
        this.auth.register(this.form.value);
    }
}

function matchingFields(field1, field2){
  return form =>{
    if(form.controls[field1].value !== form.controls[field2].value)
      return {mismatchedFields: true}
  }
}

function emailValid(){
    return control =>{
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(control.value) ? null : {invalidEmail: true}
    }
  }

  