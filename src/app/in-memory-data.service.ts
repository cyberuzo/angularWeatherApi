import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities = [
      { id: 1, name: 'Abuja' },
      { id: 2, name: 'New York' },
      { id: 3, name: 'London' },
      { id: 4, name: 'Lagos' },
      { id: 5, name: 'Ontario' },
     ];
    return {cities};
  }
}
