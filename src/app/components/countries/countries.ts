import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CountriesModel } from '../../shared/models/countries.model';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})
export class Countries implements OnInit {
  protected currentTitle = '';
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  protected countries: CountriesModel[] = [];

  ngOnInit() {
    this.getCountries();
    this.currentTitle = this.titleService.getTitle();
}
  protected changeTitle() {
    this.titleService.setTitle('Pays');
    this.currentTitle = this.titleService.getTitle();
  }

  private getCountries() {
    this.activatedRoute.data.subscribe((data) => {
      this.countries = data['countries'] as CountriesModel[];
      console.log(data['countries']);
    })
  }
}
