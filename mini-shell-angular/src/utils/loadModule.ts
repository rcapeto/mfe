import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import 'zone.js';

export function loadModule(module: any) {
   platformBrowserDynamic().bootstrapModule(module)
      .catch(err => console.error(err));
}