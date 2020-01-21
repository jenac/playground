import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-with-builder',
  templateUrl: './form-with-builder.component.html',
  styleUrls: ['./form-with-builder.component.css']
})
export class FormWithBuilderComponent implements OnInit {

  myForm: FormGroup;
  skuControl: AbstractControl;

  constructor(fb: FormBuilder) { 
    let skuValidator = (control: FormControl): { [s:string]: boolean} => {
      if (!control.value.match(/^123/)) {
        return { invalidSku: true };
      }
    };
    this.myForm = fb.group({
      'sku': ['A', Validators.compose([Validators.required, skuValidator])]
    })

    this.skuControl = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('value=', value);
  }
}
