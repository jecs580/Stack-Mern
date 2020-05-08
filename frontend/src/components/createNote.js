import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    date: new Date(),
    title: "",
    content: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
  };
  onInputChange = (e) => {
    // this.setState({ userSelected: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.title, this.state.content);
  };
  onChangeDate = (date) => {
    this.setState({ date: date });
  };
  async componentDidMount() {
    const resUsers = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: resUsers.data.map((user) => user.username),
    });
    console.log(this.state.users);
  }
  render() {
    return (
      <div className="col-md-6 mx-auto">
        <div className="card card-body">
          <h4>Crear una nota</h4>
          {/* Seleccionar Usuario */}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Titulo"
              id=""
              required
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Contenido"
              required
              onChange={this.onInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <form action="" onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
