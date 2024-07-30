import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import 'zone.js';

const platformKey = 'mfe-angular'

export function loadModule(module: any) {
   (window as any).platform = (window as any).platform || {};

   let platform = (window as any).platform[platformKey];

   if (!platform) {
      platform = platformBrowserDynamic();
      (window as any).platform[platformKey] = platform;
   }

   platform.bootstrapModule(module)
      .catch((err: any) => console.error(err));
}