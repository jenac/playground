import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'soapui',
  templateUrl: './soapui.component.html',
  styleUrls: ['./soapui.component.css']
})
export class SoapuiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 mySchema = {
    "properties": {
      "email": {
        "type": "string",
        "description": "email",
        "format": "email"
      },
      "password": {
        "type": "string",
        "description": "Password"
      },
      "rememberMe": {
        "type": "boolean",
        "default": false,
        "description": "Remember me"
      }
    },
    "required": ["email","password","rememberMe"]
  }
}
