import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  constructor(private route: ActivatedRoute) { }

  getBaseRoute() {
    const routePath = this.route.pathFromRoot.map(root => root.routeConfig)
      .filter(Boolean)
      .filter(route => !route?.component)
      

    return routePath.map(route => route?.path ?? '').filter(Boolean)
  }

  navigate() {
    const baseRoute = this.getBaseRoute()
    baseRoute.push('page2')

    window.location.href = baseRoute.join('/')
  }

  goBack() {
    window.history.back()
  }
}
