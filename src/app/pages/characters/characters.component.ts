import { ApolloService } from './../../services/apollo.service';
import * as genshin from '../../db/genshin.json';
import { Character } from './../../models/character';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters;

  constructor(private apolloService: ApolloService) {

  }

  ngOnInit(): void {
    this.apolloService.getCharacters().subscribe(data => {
      this.characters = data.data.characters
      console.log(data);
    })
  }
}
