import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { remoteEntries } from 'src/utils/remoteEntry';

@Component({
  selector: 'mini-shell-angular-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements AfterViewInit {
  @Input() hrefMfe1Card?: string = this.elementRef.nativeElement.getAttribute('hrefMfe1Card') ?? ''
  @Input() hrefMfe2Card?: string = this.elementRef.nativeElement.getAttribute('hrefMfe2Card') ?? ''

  @ViewChild('mfe2_card', { read: ViewContainerRef })
  mfe2Card!: ViewContainerRef

  @ViewChild('mfe1_card')
  mfe1Card!: ElementRef

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  async ngAfterViewInit() {
    await Promise.all([
      this.loadModuleMf1(),
      this.loadModuleMf2(),
    ])
  }

  async loadModuleMf1() {
    const webComponentName = remoteEntries.mfe1.webComponents.Card

    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.mfe1.url,
        exposedModule: remoteEntries.mfe1.remoteName.Card
      })

      if(module) {
        const webComponent = document.createElement(webComponentName)

        webComponent.setAttribute('href', this.hrefMfe1Card ?? '')

        this.mfe1Card.nativeElement.appendChild(webComponent)
      }

    } catch(err) {
      console.log(`Error get ${webComponentName}`, err)
    }
  }

  async loadModuleMf2() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.mfe2.url,
        exposedModule: remoteEntries.mfe2.remoteName.CardComponent
      })

      if(module && module.CardComponent) {
        const cardComponent = this.mfe2Card.createComponent(module.CardComponent)
        cardComponent.setInput('href', this.hrefMfe2Card)
      }

    } catch(err) {
      console.log(`Error get mfe2-card`, err)
    }
  }
}
