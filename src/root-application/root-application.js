import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () =>
  import ('../react/react.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
  import ('../angular/angular.js'), pathPrefix('/app2'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}