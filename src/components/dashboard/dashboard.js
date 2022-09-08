import React, { Component } from "react";
import instance from "../../api/api";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        img : null,
        camera_number : "",
        response : ""
    };
  }

  // detectEntryNumber = async (e) => {
  //   e.preventDefault(); 
  //   const formData = new FormData(); 
  //   formData.append('img', this.state.img , this.state.img.name);
  //   formData.append('camera_number', "fp153");
  //   await instance({
  //       url : 'fleet-in-out/',
  //       method : 'POST',
  //       data : formData
  //   })
  //   .then((res) => {
  //     window.location.reload();
  //       console.log(res);
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //       this.setState({
  //           response : err.response.data.msg
  //       })
  //   })
  // }


  // detectExitNumber = async (e) => {
  //   e.preventDefault(); 
  //   const formData = new FormData(); 
  //   formData.append('img', this.state.img , this.state.img.name);
  //   formData.append('camera_number', "fp123");
  //   await instance({
  //       url : 'fleet-in-out/',
  //       method : 'POST',
  //       data : formData
  //   })
  //   .then((res) => {
  //     window.location.reload();
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   })
  // }

  render() {
    const {response} = this.state;
    return (
      <div className="container">
        <h3 className="custom-title">Customer Portal</h3>
        <br />
        <h3 style={{"color":"red"}}>{response}</h3>        
        <div className='container'>
            <h3 className="custom-title">Raise a query</h3>
            <br />
           <form > 
            <div className="form-group">
              <div className="row"> 
                <div className="col-md-2"> 
                  <h5>Mobile number</h5>
                </div>

                <div className="col-md-5"> 
                  <input type="text" className="form-control" placeholder="Enter Field 1" />
                </div>

              </div>

              <br />
              <div className="row"> 
                <div className="col-md-2"> 
                  <h5>Query</h5>
                </div>

                <div className="col-md-5"> 
                  <textarea type="text" className="form-control" placeholder="Enter Field 1" />
                </div>

              </div>
 

               

            </div>
           </form>
            </div>

      </div>
    );
  }
}

export default Dashboard;
