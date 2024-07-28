import { loadRemoteModule } from '@angular-architects/module-federation';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { remoteEntries } from 'src/utils/remoteEntry';

@Component({
  selector: 'app-mfe1-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements AfterViewInit {
  @ViewChild('mfe1_router')
  mfe1Card!: ElementRef

  async ngAfterViewInit() {
    await Promise.all([
      this.loadRemoteEntry()
    ])
  }

  async loadRemoteEntry() {
    const webComponentName = remoteEntries.mfe1.webComponents.Router

    try {
      const module = await loadRemoteModule({
        type: 'module',
        remoteEntry: remoteEntries.mfe1.url,
        exposedModule: remoteEntries.mfe1.remoteName.Router
      })

      if(module) {
        const webComponent = document.createElement(webComponentName)

        // React Router recebe prop baseUrl
        webComponent.setAttribute('baseUrl', 'mfe1')

        this.mfe1Card.nativeElement.appendChild(webComponent)
      }

    } catch(err) {
      console.log(`Error get ${webComponentName}`, err)
    }
  }
}
