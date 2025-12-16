import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Continents } from '../models/continents.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continentsUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  getAllContinents() : Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl + '/Continents');
  }
}
