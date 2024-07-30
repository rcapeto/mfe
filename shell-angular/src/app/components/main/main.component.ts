import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { remoteEntries } from 'src/utils/remoteEntry';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('mini_shell_angular_card', { read: ViewContainerRef })
  miniShellCard!: ViewContainerRef

  @ViewChild('mini_shell_react_card')
  miniShellReactCard!: ElementRef

  constructor() { }

  async ngAfterViewInit() {
    await Promise.all([
      // this.loadRemoteEntry(),
      this.loadRemoteReactEntry(),
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

  async loadRemoteReactEntry() {
    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.miniShellReact.url,
        exposedModule: remoteEntries.miniShellReact.remoteName.Card
      })

      if (module) {
        const webComponent = document.createElement(
          remoteEntries.miniShellReact.webComponents.Card,
        )

        const attributes = [
          { attribute: 'hrefMfe1Card', value: 'mfe1/page1' },
          { attribute: 'hrefMfe2Card', value: 'mfe2/page1' },
        ]

        for (const componentProps of attributes) {
          webComponent.setAttribute(componentProps.attribute, componentProps.value)
        }

        this.miniShellReactCard.nativeElement.appendChild(webComponent)
      }

    } catch (err) {
      console.log(`Error get mini-shell-angular-card`, err)
    }
  }
}
