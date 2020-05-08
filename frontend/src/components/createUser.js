import React, { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users"); // Nos devuelve la respuesta en formato json.
    this.setState({
      users: res.data,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();
  };

  async componentDidMount() {
    this.getUsers();
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Crear un nuevo usuario</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="username">Nombre de usuario</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Nombre de usuario"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((u) => (
              <li
                key={u._id}
                className="list-group-item list-group-item-action"
                onDoubleClick={() => this.deleteUser(u._id)}
                // Para ejecutar el evento onDoubleClick se debe colocar lo que queremos que haga dentro de una nueva funcion. De otro modo se ejecutara para todos automaticamente.
              >
                {u.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
