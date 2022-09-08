import React, { Component } from "react";
import instance from "../../api/api";
// import "./vehicle.css";
class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_id: "",
      asset_name: "",
      number_plate: "",
      driver_name: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  postVehicle = async (e) => {
    e.preventDefault();
    var data = {
      asset_id: this.state.asset_id,
      asset_name: this.state.asset_name,
      number_plate: this.state.number_plate, 
      driver_name : this.state.driver_name, 
    }
 

    try {
      await instance({
        url: "fleet/",
        method: "POST",
        data: data
      })
      .then((res)=> {
        console.log(res);
        window.location.reload();
      })
      .catch((err)=> {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="custom-title"> Chat with Team</h3>
        <br />
        
      </div>
    );
  }
}

export default Vehicle;
