import { IRouteableComponent, Router, route } from '@aurelia/router';
import './app.css';

export class App {

    constructor(private router: Router)
    {
      // this.router = router;
    }

    static routes =
    [
        { path: ['', 'steady-state'], title: 'SteadyState',   component: () => import('./components/steady-state/steady-state'), name: 'steady-state'  },
        { path: 'import',             title: 'Import',        component: () => import('./components/import/import'),             name: 'import'        },
        { path: 'export',             title: 'Export',        component: () => import('./components/export/export'),             name: 'export'        },
        { path: 'help',               title: 'Help',          component: () => import('./components/help/help'),                 name: 'help'          }
    ]
}
