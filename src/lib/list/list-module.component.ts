import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Comment } from '../models/comment';
import {MatSnackBar} from "@angular/material";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent, stagger, query
} from '@angular/animations';

@Component({
  selector: 'list-comment',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ListModuleComponent),
      multi: true
    }
  ],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(300, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(1200, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('thanks', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(300),
      ]),
      transition('inactive => void', [
        animate(300, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(600)
      ]),
      transition('active => void', [
        animate(600, style({transform: 'translateX(0) scale(0)'}))
      ])
    ]),
    trigger('list', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate(200, style({ opacity: 0 }))
            // animate(1000, keyframes([
            //   style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            //   style({opacity: 1, transform: 'translateX(15px)',  offset: 0.1}),
            //   style({opacity: 1, transform: 'translateX(0)',     offset: 0.3}),
            //   style({opacity: 1, transform: 'translateX(-15px)', offset: 0.8}),
            //   style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
            // ]))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          animate(200, style({ opacity: 1 }))
        ], { optional: true })
      ])
    ])
  ]
})
export class ListModuleComponent implements OnInit, ControlValueAccessor{
  @Input() comments: Array<Comment>;
  thanksState: string = 'inactive';

  constructor(public snackBar: MatSnackBar) {
    console.log('ListModuleComponent Constructor');
  }

  ngOnInit() {
    console.log("OnInit List", this.comments);
  }

  removeOneComment(comment) {
    let index = this.comments.indexOf(comment, 0);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
    this.snackBar.open("Commentaire supprimé", "",{
      duration: 2000,
    });
  }

  validateComments() {
    let checkLenght = this.comments.length;
    if (checkLenght < 25) {
      this.comments.splice(0, checkLenght);
    } else {
      this.comments.splice(0, 25);
    }
    this.snackBar.open("Commentaires validés", "",{
      duration: 2000,
    });
    window.scrollTo(0,0);
    this.thanksState = this.comments.length == 0 ? 'thanksState' : 'inactive';
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }
}
