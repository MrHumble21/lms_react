/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import like from "../assets/images/like.png";
import liked from "../assets/images/liked.png";
import wiut from "../assets/images/wiut.JPG";
import Spinner from "./Spinner";

function Modules(props) {
  const [modules, setModules] = useState([]);
  const [dislike, setLike] = useState(true);

  const likeHanler = (e)=>{
   
    setLike(!dislike)
  }


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setModules(data));
    console.log(modules);
  }, []);

  // let data = new Date().toLocaleDateString();

  return (
    <>
      {modules.length === 0 ? (
        <Spinner />
      ) : (
        <div className="container mt-4">
          <div className="alert alert-dismissible alert-success">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
            ></button>
            <h4
              style={{ color: "#1C658C" }}
              className=" mb-4 text-uppercase text-center"
            >
              Hi Student! Are you sure you ready to rock today's modules ? 😎
            </h4>
          </div>
          <div className="row">
            {modules.map((module) => {
              const moduleName = module;

              return (
                <div
                  key={module.id}
                  className="col-sm-3 py-2  d-flex justify-content-center align-items-center"
                >
                  <div className="card custom-card position-relative bg-light ">
                    <img src={wiut} alt="" />
                    <span className=" position-absolute fs-5 badge bg-danger"></span>
                    <div
                      style={{
                        background: "#398AB9 !important",
                      }}
                      className="card-body"
                    >
                      {" "}
                      <Link
                        to={`${module.id}`}
                        state={moduleName}
                        className=" text-decoration-none bg-light mb-4"
                      >
                        <h6
                          style={{ color: "#1C658C" }}
                          className="text-uppercase card-title"
                        >
                          {module.name}
                        </h6>
                      </Link>
                      <p className="card-text">{module.website}</p>
                      <button className='d-flex justify-content-end btn btn-outline-light' onClick={()=>likeHanler()} >
                        <img style={{ width: "30px" }} src={dislike ? like : liked} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Modules;

// return (
//   <div classNameName="col-sm-4 d-flex justify-content-center align-items-center">
//     <div class="card text-white bg-primary mb-3">
//       <img src={wiut} alt="" />
//       <div class="card-body">
//         <h4 class="card-title">Primary card title</h4>
//         <p class="card-text">
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </p>
//       </div>
//     </div>
//   </div>
// );
