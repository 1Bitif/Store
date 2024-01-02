import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

const Footer = () => {
    
  return (
    <>
      <div className="bg-dark text-white pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Company name
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta nam quis consequatur repudiandae recusandae fugit magni repellat ut natus omnis, aliquam, odio placeat quasi eius vel.
              </p>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text_deco">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <NavLink to="" className="text-white">
                  TheProviders
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Creativity
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  SourceFiles
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  bootstrap 5 alpha
                </NavLink>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text_deco">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <NavLink to="" className="text-white">
                  Your Account
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Become an Affiliates
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Shipping Rates 
                </NavLink>
              </p>
              <p>
                <NavLink to="" className="text-white">
                  Help
                </NavLink>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
                <p>
                    <i className="fa fa-home mr-3"> Agadir, Inezgane-Tarrast NY 816, MA</i>
                </p>
                <p>
                    <i className="fa fa-envelope mr-3 "> aajli.abdellatif@gmail.com</i> 
                </p>
                <p>
                    <i className="fa fa-phone mr-3"> +212 659284147</i>
                </p>
                <p>
                    <i className="fa fa-print mr-3 "> +01 234 535 33</i>
                </p>
            </div>
            <hr className="mb-4" />
            <div className="row align-items-center">
                <div className="col-md-7 col-lg-8 text_deco">
                    <p>Copyright 2023 All rights reserved by : 
                        <NavLink to="">
                            <strong className="text-warning"> The Store</strong>
                        </NavLink>
                    </p>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="text-center text-md-right">
                        <ul className="list-unstyled list-inline ">
                            <li className="list-inline-item">
                                <NavLink to="" className="btn-floating btn-sm text-white mx-2 icons_contact">
                                    <i className="fa fa-facebook "></i>    
                                </NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="" className="btn-floating btn-sm text-white mx-2 icons_contact">
                                    <i className="fa fa-twitter "></i>    
                                </NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="" className="btn-floating btn-sm text-white mx-2 icons_contact">
                                    <i className="fa fa-google-plus "></i>    
                                </NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="" className="btn-floating btn-sm text-white mx-2 icons_contact" >
                                    <i className="fa fa-linkedin "></i>    
                                </NavLink>
                            </li>
                            <li className="list-inline-item ">
                                <NavLink to="" className="btn-floating btn-sm text-white mx-2 icons_contact">
                                    <i className="fa fa-youtube  "></i>    
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
