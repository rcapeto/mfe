import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { remoteEntries } from 'src/utils/remoteEntry';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('mini_shell_angular_card', { read: ViewContainerRef })
  miniShellCard!: ViewContainerRef

  constructor() { }

  async ngAfterViewInit() {
    await Promise.all([
      this.loadRemoteEntry()
    ])
  }

  async loadRemoteEntry() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.miniShell.url,
        exposedModule: remoteEntries.miniShell.remoteName.CardComponent
      })

      if (module && module.CardComponent) {
        const cardComponent = this.miniShellCard.createComponent(module.CardComponent)
        const attributes = [
          { attribute: 'hrefMfe1Card', value: 'mfe1/page1' },
          { attribute: 'hrefMfe2Card', value: 'mfe2/page1' },
        ]

        for (const componentProps of attributes) {
          cardComponent.setInput(componentProps.attribute, componentProps.value)
        }
      }

    } catch (err) {
      console.log(`Error get mini-shell-angular-card`, err)
    }
  }
}
