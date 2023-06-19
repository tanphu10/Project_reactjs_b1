import React, { Component } from "react";
import "./style.css";
export default class extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner">
          <h1>A Warm Welcome!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis velit vel delectus aut, reiciendis possimus sit magni
            modi soluta? Harum! Bootstrap utility classes are used to create
            this jumbotron since the old component has been removed from the
            framework. Why create custom CSS when you can use utilities?
          </p>
          <button className="btn btn-danger">call to action</button>
        </div>
        <div className="row">
          <div className="content col-12 col-md-6 col-xl-3">
            <div className="item">
              <div className="bg-secondary">500x325</div>
              <div className="bg-light">
                <h2>Card Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit vel delectus aut, reiciendis possimus sit
                  magni modi soluta? Harum!
                </p>
              </div>
              <div className="bottom text-center ">
                <button className="btn btn-danger">Find out more</button>
              </div>
            </div>
          </div>
          <div className="content col-12 col-md-6 col-xl-3">
            <div className="item">
              <div className="bg-secondary">500x325</div>
              <div className="bg-light">
                <h2>Card Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit vel delectus aut, reiciendis possimus sit
                  magni modi soluta? Harum!
                </p>
              </div>
              <div className="bottom text-center ">
                <button className="btn btn-danger">Find out more</button>
              </div>
            </div>
          </div>
          <div className="content col-12 col-md-6 col-xl-3">
            <div className="item">
              <div className="bg-secondary">500x325</div>
              <div className="bg-light">
                <h2>Card Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit vel delectus aut, reiciendis possimus sit
                  magni modi soluta? Harum!
                </p>
              </div>
              <div className="bottom text-center ">
                <button className="btn btn-danger">Find out more</button>
              </div>
            </div>
          </div>
          <div className="content col-12 col-md-6 col-xl-3">
            <div className="item">
              <div className="bg-secondary">500x325</div>
              <div className="bg-light">
                <h2>Card Title</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis velit vel delectus aut, reiciendis possimus sit
                  magni modi soluta? Harum!
                </p>
              </div>
              <div className="bottom text-center ">
                <button className="btn btn-danger">Find out more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
