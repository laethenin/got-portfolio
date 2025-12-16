import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CitiesList } from './cities-list/cities-list';
import { CitiesModel } from '../../../shared/models/cities.model';


@Component({
  selector: 'app-cities',
  imports: [ CitiesList ],
  templateUrl: './cities.html',
  styleUrl: './cities.scss',
})

export class Cities implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);

  protected cities: CitiesModel[] = [];
  protected currentTitle = '';

  // protected filteredCities: CitiesModel[] = [];
  // protected searchTerm: string = '';

  ngOnInit() {
      this.getCities();
      // this.currentTitle = this.titleService.getTitle();
      this.getTitle();
  }

  private getCities() {
    this.activatedRoute.data.subscribe(data => {
      this.cities = data['cities'];
      // this.filteredCities = [...this.cities];
      console.log('Cities data:', this.cities);
    })

    // this.activatedRoute.title.subscribe(title => {
    //   if (title) {
    //     this.currentTitle = title;
    //     this.titleService.setTitle(title);
    //   }
    // });
  }

  private getTitle() {
     this.currentTitle = this.titleService.getTitle();
  }

    // protected onSearch(term: string): void {
    //      console.log('ONSEARCH CALLED | term=', term);
    //     this.searchTerm = term.trim();
    //      const search = term.toLowerCase().trim();
    
    //      this.filteredCities = this.cities.filter((city: CitiesModel) => {
    //        const cityName = (city.name ?? '').toLowerCase();
    //        return cityName.includes(search);
    //      });
    
    //      console.log("RESULT COUNT=", this.filteredCities.length);
    //    }

  protected addCity(createdCity: CitiesModel){
    this.cities = [...this.cities, createdCity]; 
  } 
}


