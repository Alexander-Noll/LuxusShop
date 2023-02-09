import { trigger, state, style, transition, animate } from '@angular/animations';

export const collapseAnimation = trigger('collapse', [
  state('open', style({
    height: '*'
  })),
  state('closed', style({
    height: '0px',
    padding: '0'
  })),
  transition('open <=> closed', animate('300ms ease-in-out'))
]);
