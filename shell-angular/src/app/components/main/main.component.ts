import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { remoteEntries } from 'src/utils/remoteEntry';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('mfe2_card', { read: ViewContainerRef })
  mfe2Card!: ViewContainerRef

  constructor() {}

  async ngAfterViewInit() {
    await Promise.all([
      this.loadRemoteEntry()
    ])
  }

  async loadRemoteEntry() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.mfe2.url,
        exposedModule: remoteEntries.mfe2.remoteName.CardComponent
      })

      if(module && module.CardComponent) {
        const cardComponent = this.mfe2Card.createComponent(module.CardComponent, {
          
        })

        cardComponent.setInput('href', 'mfe2')
      }

    } catch(err) {
      console.log(`Error get mfe2-card`, err)
    }
  }
}
