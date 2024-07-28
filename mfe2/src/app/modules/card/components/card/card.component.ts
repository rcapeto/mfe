import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'mfe2-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() href?: string = this.elementRef.nativeElement.getAttribute('href') ?? '';

  constructor(private elementRef: ElementRef) {
    console.log("@@@ href", { href: this.href, ref: elementRef })
  }

  getPathToNavigate() {
    if(!this.href || typeof this.href !== 'string') {
      return []
    }

    return [this.href]
  }

  navigate() {
    const baseRoute = this.getPathToNavigate()
    baseRoute.push('page1')

    window.location.href = baseRoute.join('/')
  }
}
