import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'new-person-page',
  templateUrl: 'new-person.page.html',
  styleUrls: ['new-person.page.scss'],
})
export class NewPersonPage {
  public ngForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService
  ) {
    this.ngForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthdate: ['', Validators.required],
      phone: [''],
      address: [''],
    });
  }

  public submitForm() {
    if (this.ngForm.valid) {
      let person: Person = {
        name: this.ngForm.value.name,
        email: this.ngForm.value.email,
        birthdate: this.ngForm.value.birthdate,
        phone: this.ngForm.value.phone,
        address: this.ngForm.value.address,
      };

      this.peopleService.addPerson(person);
    }
  }
}
