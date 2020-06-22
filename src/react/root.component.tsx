import * as React from "react";
import Swal from "sweetalert2";

export default class Root extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { title: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.alert = this.alert.bind(this);
  }

  alert() {
    Swal.fire(`${this.state.title}`, `${this.state.message}`, "success");
  }

  handleChange(event: any) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="jumbotron d-flex align-items-center">
        <div className="container text-center">
          <div className="form-group">
            <label>Type your tittle</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Type your message</label>
            <input
              type="text"
              name="message"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.alert}
          >
            Este es un boton
          </button>
        </div>
      </div>
    );
  }
}
