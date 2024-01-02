import React from "react";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
const ContactPage = () => {
  return (
    <>

<div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
  
            <div className="p-inputgroup flex-1 mb-2">
              <span className="p-inputgroup-addon">
                  <i className="pi pi-user "></i>
              </span>
              <InputText 
                  placeholder="User" 
                  id="user"
                  type="text"
              />
            </div>

            <div className="p-inputgroup flex-1 mb-2">
                <span className="p-inputgroup-addon">
                  <i className="pi pi-at "></i>
                </span>
                <InputText 
                    placeholder="name@example.com" 
                    id="email"
                    type="email"
                />
            </div>
            <div className="form  mt-5">
            <span className="p-float-label">
                <InputTextarea id="description" rows={5} cols={35} />
                <label htmlFor="description">Description</label>
            </span>
        </div>
              {/* <div class="form  my-3">
         
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div> */}
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-outline-warning"
                  type="submit"
      
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> 

    </>
  );
};

export default ContactPage;
