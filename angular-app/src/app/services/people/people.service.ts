import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from '../../models/person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  public people$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  private people: Person[] = [];

  public getPeople() {
    return this.people;
  }

  public addPerson(person: Person) {
    this.people.push(person);
    this.people$.next(this.people);
  }

  public removePerson(person: Person) {
    const index = this.people.findIndex((f) => f.email === person.email);
    this.people.splice(index, 1);
    this.people$.next(this.people);
  }
}
