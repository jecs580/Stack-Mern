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
    editing: false,
    _id: "",
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.userSelected,
      date: this.state.date,
    };
    if (this.state.editing) {
      await axios.put(
        `http://localhost:4000/api/notes/${this.state._id}`,
        newNote
      );
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }
    window.location.href = "/";
  };
  onInputChange = (e) => {
    // this.setState({ userSelected: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangeDate = (date) => {
    this.setState({ date: date });
  };
  async componentDidMount() {
    const resUsers = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: resUsers.data.map((user) => user.username),
      userSelected: resUsers.data[0].username,
    });
    if (this.props.match.params.id) {
      const res = await axios.get(
        `http://localhost:4000/api/notes/${this.props.match.params.id}`
      );
      this.setState({
        editing: true,
        _id: this.props.match.params.id,
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        userSelected: res.data.author,
      });
    }
  }
  render() {
    return (
      <div className="col-md-6 mx-auto">
        <div className="card card-body">
          <h4>
            {this.state.editing ? "Actualizar una nota" : "Crear una nota"}
          </h4>
          {/* Seleccionar Usuario */}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
              value={this.state.userSelected}
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
              value={this.state.title}
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Contenido"
              required
              value={this.state.content}
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
