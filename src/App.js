import React, { useState, useEffect } from "react";
//import logo from './logo.svg';
import API from "./utils/API";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  const [users, setUsers] = useState([]);
  const [search] = useState("");


  useEffect(() => {
    API.getUsers().then((response) => {
      console.log(response.data.results);
      setUsers(response.data.results);
    });
  }, [search]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const input = event.target.value;
    console.log(input);
    const employees = users.filter((employee) => {
      //return employee.name.first;
      return (
        employee.name.first.indexOf(input) > -1 ||
        employee.name.last.indexOf(input) > -1
      );
    });
    setUsers(employees);

    console.log(employees);
  };

  return (
    <div>
      <Nav />
      <Search name="Search" onChange={handleInputChange} results={users} />
      {users.map((item) => {
        return (
          <div className="container card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row no-gutters">
              {/* <div className="col-md-4">
              <img src={item.picture.thumbnail} className="card-img" >
            </div> */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.name.first} {item.name.last}
                  </h5>
                  <p className="card-text">Cell: {item.cell}</p>
                  <p className="card-text">Email: {item.email}</p>
                  <p className="card-text">Age: {item.registered.age}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
