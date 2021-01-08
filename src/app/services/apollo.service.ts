import { Query } from './../models/query';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo) {}

  getCharacters(): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
        query GetCharacters {
          characters {
            id
            name
            title
            image
            element
            description
          }
        }
      `,
    });
  }

  getCharacterById(id: number): Observable<Query> {
    return this.apollo.query<Query>({
      query: gql`
        query GetCharacter($id: Int) {
          character(id: $id) {
            id
            name
            title
            image
            element
            description
          }
        }
      `,
      variables: { id },
    });
  }
}
