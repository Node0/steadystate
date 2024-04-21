import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { SteadyStateApp } from './steady-state-app';

Aurelia
  .register(RouterConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(SteadyStateApp)
  .start();
