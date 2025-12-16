import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CountriesModel } from '../../shared/models/countries.model';

@Component({
  selector: 'app-countries',
  imports: [RouterOutlet],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})

export class Countries implements OnInit {
  protected currentTitle = '';
  protected countries: CountriesModel[] = [];

  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private router = inject(Router);
  

  ngOnInit() {
    this.getCountries();
    this.currentTitle = this.titleService.getTitle();
  }

  //   if (!this.hasActiveChild()) {
  //     this.getCountries();
  //   }

  //   this.activatedRoute.title.subscribe(title => {
  //     this.currentTitle = title || '';
  //     this.titleService.setTitle(this.currentTitle);
  //   });

  //   this.router.events.subscribe(() => {
  //     if (!this.hasActiveChild() && this.countries.length === 0) {
  //       this.getCountries();
  //     } else if (this.hasActiveChild()) {
  //       this.countries = [];
  //     }
  //   });
  // }

  // private hasActiveChild(): boolean {
  //   const url = this.router.url;
  //   return url.includes('/countries/cities') || url.match(/\/countries\/\d+/) !== null;
  // }

   protected changeTitle() {
     this.titleService.setTitle('Pays');
     this.currentTitle = this.titleService.getTitle();
   }

  private getCountries() {
    this.activatedRoute.data.subscribe((data) => {
      this.countries = data['countries'];
    })
  }

  protected goToCountryDetails(id: number) {
    this.router.navigate(['/countries', id]);
  }
}
