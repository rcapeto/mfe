import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {
  constructor(private route: ActivatedRoute, private router: Router) {}

  getBaseRoute() {
    const routePath = this.route.pathFromRoot.map(root => root.routeConfig)
      .filter(Boolean)
      .filter(route => !route?.component)

    return routePath.map(route => route?.path ?? '').filter(Boolean)
  }

  navigate() {
    const baseRoute = this.getBaseRoute()
    baseRoute.push('page1')

    this.router.navigate(baseRoute)
  }
}
