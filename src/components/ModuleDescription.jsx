/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function ModuleDescription() {
  const [toggle, setToggle] = useState(false);
  const [right, left] = useState(true);
  const sidebarHandler = () => {
    // sb-sidenav-toggled
    setToggle(!toggle);
    left(!right);
  };
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => setWeeks(data));
  }, []);

  console.log(weeks);
  const location = useLocation().state;

  return (
    <div className={toggle ? "sb-sidenav-toggled" : ""}>
      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">wiut LMS</div>
          <div className="list-group list-group-flush">
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Dashboard
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Shortcuts
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Overview
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Events
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Profile
            </a>
            <a
              className="list-group-item list-group-item-action list-group-item-light p-3"
              href="#!"
            >
              Status
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar  fixed-top  navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
              <button
                className="btn btn-outline-success alert-success"
                onClick={(e) => sidebarHandler()}
                id="sidebarToggle"
              >
                <i
                  class={
                    right
                      ? "fa-solid fa-arrow-right-long"
                      : "fa-solid fa-arrow-left-long"
                  }
                ></i>
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#!">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#!">
                        Action
                      </a>
                      <a className="dropdown-item" href="#!">
                        Another action
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#!">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <br />
          {/* main content */}
          <div className="mt-5 container-fluid">
            <div className="alert-success alert name-container container my-2">
              <h4>Hi Abdulboriy! Are you ready to rock todays lessons? 😎</h4>
              <span class="badge rounded-pill bg-light text-black-50">
                How-to's <i class="fa-solid fa-circle-question"></i>
              </span>
            </div>

            {weeks.map((week, index) => (
              <div key={week.id} class="alert alert-primary" role="alert">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  href="#"
                  className="text-decoration-none"
                >
                  <p className="p-0 m-0 text-uppercase">{`WEEK ${
                    index + 1
                  }`}</p>
                </a>
                {/* <!-- Button trigger modal --> */}

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                          {location.name}
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        {
                          <div class="list-group">
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                              aria-current="true"
                            ><i class="fa-solid fa-file mx-2 text-primary"></i>
                              The current button
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A second item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A third button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A fourth button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                            <i class="fa-solid fa-file mx-2 text-primary"></i>  A button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                              aria-current="true"
                            ><i class="fa-solid fa-file mx-2 text-primary"></i>
                              The current button
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A second item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A third button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A fourth button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                <i class="fa-solid fa-file mx-2 text-primary"></i>              A button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                              aria-current="true"
                            ><i class="fa-solid fa-file mx-2 text-primary"></i>
                              The current button
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A second item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A third button item
                            </button>
                            <button
                              type="button"
                              class="list-group-item list-group-item-action"
                            >
                             <i class="fa-solid fa-file mx-2 text-primary"></i> A fourth button item
                            </button>
                          </div>
                        }
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        ><i class="fa-solid fa-file mx-2 text-primary"></i>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* closing main content */}
        </div>
      </div>
    </div>
  );
}

export default ModuleDescription;

// {/* <h1>Module desc ID - {moduleId}</h1> */}
// {info.map((x) => (
// <div key={x.id}>
// {/* <h2>{x.id}</h2> */}
// {/* <h2>{x.email}</h2> */}
// {/* <h2>{x.phone}</h2> */}
// {/* </div> */}
// ))}
// const { moduleId } = useParams();
// const location = useLocation();
// const info = [location.state];
