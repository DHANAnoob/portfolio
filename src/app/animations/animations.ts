import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate(
      '600ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
]);

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate(
      '800ms 200ms ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        stagger(100, [
          animate(
            '500ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('600ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ transform: 'translateX(-100%)' })),
  ]),
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

export const overlayAnimation = trigger('overlayAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('300ms ease-in', style({ opacity: 0 }))]),
]);

export const modalAnimation = trigger('modalAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.7) translateY(-50px)' }),
    animate(
      '400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      style({ opacity: 1, transform: 'scale(1) translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms ease-in',
      style({ opacity: 0, transform: 'scale(0.7) translateY(-50px)' })
    ),
  ]),
]);
