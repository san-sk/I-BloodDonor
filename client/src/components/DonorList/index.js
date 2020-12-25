import React, { Component } from "react";
import Table from './table';
import 'bootstrap/dist/css/bootstrap.min.css';


const options = [
  { value: '0', label: 'Find all' },
  { value: '1', label: 'A+' },
  { value: '2', label: 'B+' },
  { value: '3', label: 'O+' },
  { value: '4', label: 'AB+' },
  { value: '5', label: 'A-' },
  { value: '6', label: 'B-' },
  { value: '7', label: 'O-' },
  { value: '8', label: 'AB-' }
];
class DonorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/v1/user/fulluserslist`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        if (response.status > 400) {
          throw new Error("Bad response from server");
        } else {
          console.log(response);
        }
        return response.json();
      })
      .then((respData) => {
        this.setState({ userlist: respData });
        console.log(respData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      location: event.target.location.value,
      bloodGroup: event.target.bloodGroup.value
    };
    /* console.log(data); */
    fetch(`/api/v1/user/userlist?location=${encodeURIComponent(data.location)}&bloodGroup=${encodeURIComponent(data.bloodGroup)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        if (response.status > 400) {
          throw new Error("Bad response from server");
        } else {
          console.log(response);
        }
        return response.json();
      })
      .then((respData) => {
        this.setState({ userlist: respData });
        console.log(respData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="section-content-search section-process">
        <div className="col-md-12 col-sm-12 text-center">
          <h2 className="section-heading"><span>Search for </span> Donors</h2>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 search-form-wrapper text-center clearfix">
            <form onSubmit={event => this.handleSubmit(event)} className="search-form">
              <div className="form-group col-md-6">
                <input required name="location" className="form-control" placeholder="Location" type="search" />
              </div>
              <div className="form-group col-md-6">
                <div className="select-style">
                  <select required className="form-control" name="bloodGroup">
                    {options.map(optionVal => <option key={optionVal.value} value={optionVal.value}>{optionVal.label}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <button className="btn-submit" type="submit">Search</button>
              </div>
            </form>
          </div>
          <div className="col-md-2" />
        </div>
        <div className="App">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="./">
              <img src="images/logo.png" alt="logo" width="40" /> Donors
            </a>
          </nav>
          <Table userlist={this.state.userlist} />
        </div>
      </div>
    );
  }
}

export default DonorList;
