import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Continents } from '../models/continents.model';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl = 'https://thronesapi.com/api/v2/Continents';
  private httpClient = inject(HttpClient);

  getAllContinents() : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl);
  }
}
