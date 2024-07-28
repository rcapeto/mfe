import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mfe2-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() href?: string = this.elementRef.nativeElement.getAttribute('href') ?? '';

  constructor(private elementRef: ElementRef, private router: Router) { }

  getPathToNavigate() {
    if (!this.href || typeof this.href !== 'string') {
      return ''
    }

    return this.href
  }

  navigate() {
    const href = this.getPathToNavigate()

    if(href) {
      this.router.navigate(href?.split('/'))
    }
  }
}
