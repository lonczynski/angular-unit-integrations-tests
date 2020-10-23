import { TestBed } from '@angular/core/testing';
import { Person } from '../../models/person';
import { PeopleService } from './people.service';

describe('Service: BREADCRUMB', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [PeopleService],
    });
  });

  it('should load service with empty people array', () => {
    const peopleService: PeopleService = TestBed.inject(PeopleService);

    expect(peopleService.getPeople()).toEqual([]);
  });

  it('should update people array with success when adding a new person', () => {
    const PERSON_MOCK: Person = {
      name: 'name mock 1',
      email: 'email@mock1',
      birthdate: new Date('1990-01-01'),
      address: 'address mock 1',
      phone: '31 3333',
    };

    const peopleService: PeopleService = TestBed.inject(PeopleService);
    peopleService.addPerson(PERSON_MOCK);

    expect(peopleService.getPeople()).toEqual([PERSON_MOCK]);
  });

  it('should receive the updated people array on people$ subject when adding a new person', (done) => {
    const PERSON_MOCK: Person = {
      name: 'name mock 1',
      email: 'email@mock1',
      birthdate: new Date('1990-01-01'),
      address: 'address mock 1',
      phone: '31 3333',
    };

    const peopleService: PeopleService = TestBed.inject(PeopleService);
    peopleService.addPerson(PERSON_MOCK);

    peopleService.people$.subscribe((people) => {
      expect(people).toEqual([PERSON_MOCK]);
      done();
    });
  });

  it('should remove a person from people array with success', () => {
    const PERSON_MOCK: Person = {
      name: 'name mock 1',
      email: 'email@mock1',
      birthdate: new Date('1990-01-01'),
      address: 'address mock 1',
      phone: '31 3333',
    };

    const PERSON_MOCK_2: Person = {
      name: 'name mock 2',
      email: 'email@mock2',
      birthdate: new Date('1990-01-01'),
      address: 'address mock 2',
      phone: '31 3333',
    };

    const peopleService: PeopleService = TestBed.inject(PeopleService);
    peopleService.addPerson(PERSON_MOCK);
    peopleService.addPerson(PERSON_MOCK_2);
    peopleService.removePerson(PERSON_MOCK);

    expect(peopleService.getPeople()).toEqual([PERSON_MOCK_2]);

    peopleService.addPerson(PERSON_MOCK);
    peopleService.removePerson(PERSON_MOCK_2);

    expect(peopleService.getPeople()).toEqual([PERSON_MOCK]);
  });

  it('should receive the updated people array on people$ subject when removing an existing person', (done) => {
    const PERSON_MOCK: Person = {
      name: 'name mock 1',
      email: 'email@mock1',
      birthdate: new Date('1990-01-01'),
      address: 'address mock 1',
      phone: '31 3333',
    };

    const PERSON_MOCK_2: Person = {
      name: 'name mock 2',
      email: 'email@mock2',
      birthdate: new Date('1990-01-01'),
      address: 'address mock 2',
      phone: '31 3333',
    };

    const peopleService: PeopleService = TestBed.inject(PeopleService);
    peopleService.addPerson(PERSON_MOCK);
    peopleService.addPerson(PERSON_MOCK_2);
    peopleService.removePerson(PERSON_MOCK);

    peopleService.people$.subscribe((people) => {
      expect(people).toEqual([PERSON_MOCK_2]);
      done();
    });
  });
});
