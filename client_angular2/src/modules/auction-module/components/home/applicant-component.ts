import { Component, Input } from '@angular/core';
import { AppDataService, Applicant } from './services/appData-service';

@Component({
  selector: 'tag name goes here',
  styleUrls: [ 'css name goes here' ],
  template: `
    <div class="input-group">    	<label>What is your family name as used now?</label>    	<div class="fake-input">{{applicant.familyName}}</div>    </div>    <div class="input-group">    	<label>Given names?</label>    	<div class="fake-input">{{applicant.givenName}}</div>    </div>
  `
})
export default class ApplicantComponent {
    private applicant: Applicant;

    // applicantId should ba passed from parent, here using default value
    @Input() applicantId: number = 0;  

    constructor(private appData: AppDataService) {
        this.applicant = this.appData.getApplicantById(applicantId);
    }
}

// put the following three blocks (Applicant, ProductService and applicants) 
// into 'services/appData-service' file, and then import it via:
// import { AppData, Applicant } from './services/appData-service';
export class Applicant {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public description: string,
        public categories: string[]) {
    }
}

export class AppDataService {
    getApplicantById(applicantId: number): Applicant {
        return applicants.find(a => a.id === applicantId);
    }
}

var applicants = [
    {
        "id": 0,
        "familyName": "familyName01",
        "givenName": "givenName01"
    },
    {
        "id": 1,
        "familyName": "familyName02",
        "givenName": "givenName02"
    },
    {
        "id": 2,
        "familyName": "familyName03",
        "givenName": "givenName03"
    },
    {
        "id": 3,
        "familyName": "familyName04",
        "givenName": "givenName04"
    }
];

