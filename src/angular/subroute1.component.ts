import { Component, OnInit } from "@angular/core";
import e from "../event-bus/bus.js";

@Component({
  template: `
    <div>
      <div class="form-group">
        <label>Enviar un mensaje a React</label>
        <input
          #txtProgress
          type="text"
          class="form-control"
          name="message"
          [(ngModel)]="message"
          (ngModelChange)="handleChange($event)"
        />
        <a href="#" class="btn btn-primary mt-5">Send message to React</a>
      </div>
    </div>
  `,
})
export class Subroute1 implements OnInit {
  message = "este es un mensaje";

  constructor() {}

  ngOnInit() {}

  sendMessage() {
    e.emit("message", { text: this.message });
  }

  handleChange() {}
}
