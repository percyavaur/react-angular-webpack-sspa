import { Component } from "@angular/core";

@Component({
  selector: "app2",
  template: `
    <div class="jumbotron d-flex align-items-center">
      <div class="container text-center">
        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Subroutes
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              [routerLink]="['/subroute1']"
              routerLinkActive="active"
              >Subroute 1</a
            >
            <a
              class="dropdown-item"
              [routerLink]="['/subroute2']"
              routerLinkActive="active"
              >Subroute 2</a
            >
          </div>
        </div>
        <div class="container mt-5">
          <div class="card">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <div class="m-5"><router-outlet></router-outlet></div>
              <!-- <a href="#" class="btn btn-primary">Go to React</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class App2 {}
