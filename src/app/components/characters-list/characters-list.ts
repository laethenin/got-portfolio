import { Component, Input } from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import { SlugifyPipe } from '../../shared/pipes/slugify-pipe';
import { CustomPipe } from '../../shared/pipes/custom-pipe';


@Component({
  selector: 'app-characters-list',
  imports: [ SlugifyPipe, CustomPipe ],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  @Input() charactersFromParent!: Characters[]; 
  @Input() variableFromParent!: string;
}

