import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Comment } from '../../lib/models/comment';

@Component({
  selector: 'to-validate',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class ToValidateComponent implements OnInit {
  public static initFalseComment(): Comment[]{
    return [
      {ID: 1, UserID: 1, UserName: 'George Orwell', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Marcel Proust', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'William Faulkner', Content: 'Gnia Gnia Gnia bande de !@*# Gnia Gnia Gni', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Nikos Kazantzakis', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Léon Tolstoï', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Toni Morrison', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Alfred Döblin', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Albert Camus', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Honoré de Balzac', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Gustave Flaubert', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'William Shakespeare', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Lu Xun', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Saadi', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'John Doe', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Stendhal', Content: 'Blah Blah Blah', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Mark Twain', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Homère', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Sophocle', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Valmiki', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Virgile', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Ovide', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Euripide', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Sophocle', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Mohandas Karamchand Gandhi', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Martin Luther King', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Nelson Mandela', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Cordell Hull', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Emily Greene Balch', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'John Mott', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Léon Jouhaux', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Albert Schweitzer', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'René Cassin', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Mère Teresa', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Tenzin Gyatso', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Yasser Arafat', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Kofi Annan', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Al Gore', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Barack Obama', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
      {ID: 1, UserID: 1, UserName: 'Malala Yousafzai', Content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit', Validate: false, Deleted: false},
    ];
  }

  public comments = [];
  /**
   * Set our default values
   */
  public localState = { value: '' };

  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
    this.comments = ToValidateComponent.initFalseComment();
    console.log("After Init", this.comments);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
