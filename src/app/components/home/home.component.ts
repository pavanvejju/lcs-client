import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LcsRequest } from 'src/app/model/lcs-request.model';
import { LcsResponse } from 'src/app/model/lcs-response.model';
import { LcsService } from 'src/app/services/lcs.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  inputValues: string[] = [];
  responseArray: string[] = [];
  errorDescription: string = '';
  errorCode: number = 0;

  
  constructor(private lcsService: LcsService, private router: Router) {   

  }
  onAddButtonClick() {
    console.log("add button click");
    this.inputValues.push('');
  }

  oncalculate(){    
    const lcsRequest = new LcsRequest();
    lcsRequest.setOfStrings  = this.inputValues;
    console.log("submit form-->"+ lcsRequest);

    this.lcsService.calculateFunction(lcsRequest)
    .subscribe(
      (response) => {
        // Handle the successful response from the server
        console.log('Response:', response);
        const lcsResponse:LcsResponse = response;
        this.responseArray = lcsResponse.lcs;
        this.errorDescription = lcsResponse.errorDetails.errorDescription;
        this.errorCode  = lcsResponse.errorDetails.errorCode;
      },
      (error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
        this.responseArray = [];
        this.errorDescription = 'An error occurred while processing the request.';
        this.errorCode  = 1001;
      }
    );
  }
  ngOnInit(): void {}
}