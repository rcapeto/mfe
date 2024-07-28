import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { remoteEntries } from 'src/utils/remoteEntry';

@Component({
  selector: 'app-mfe1-card',
  templateUrl: './mfe1-card.component.html',
  styleUrls: ['./mfe1-card.component.scss']
})
export class Mfe1CardComponent implements AfterViewInit {
  @ViewChild('mfe1_card')
  mfe1Card!: ElementRef

  async ngAfterViewInit() {
    await Promise.all([
      this.loadRemoteEntry()
    ])
  }

  async loadRemoteEntry() {
    const webComponentName = remoteEntries.mfe1.webComponents.Card

    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.mfe1.url,
        exposedModule: remoteEntries.mfe1.remoteName.Card
      })

      if(module) {
        const webComponent = document.createElement(webComponentName)

        webComponent.setAttribute('href', 'mfe1/page1')

        this.mfe1Card.nativeElement.appendChild(webComponent)
      }

    } catch(err) {
      console.log(`Error get ${webComponentName}`, err)
    }
  }
}
