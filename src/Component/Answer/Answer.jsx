import React from "react";
import "./Answer.css";
import imgfloat from "../../assets/floatimg.webp";
const Answer = () => {
  return (
    <div className="answer">
      <div className="topbox">
       
        <div className="contentbox">
          
          <div className="tier">
            <div className="q">
              <h1>what a website do to my Business</h1>
            </div>
            <div className="ans ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                quo.
              </p>
              <hr />
            </div>
          </div>

          <div className="tier ">
            <div className="q ">
              <h1>jnwxkj</h1>
            </div>
            <div className="ans">
              <p>
                knexkjn2 Lorem ipsum dolor sit. Lorem, ipsum. Lorem ipsum dolor
                sit amet consectetur adipisicing.
              </p>
              <hr />
            </div>
          </div>

          <div className="tier">
            <div className="q ">
              <h1>jwnfekjrnvjrv</h1>
            </div>
            <div className="ans">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, officia?
              </p>
              <hr />
            </div>
          </div>

          <div className="tier tier1">
            <div className="q q1">
              <h1>jwnfekjrnvjrv</h1>
            </div>
            <div className="ans ans1">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, officia?
              </p>
              <hr />
            </div>
          </div>
        </div>

        <div className="imgbox">
          <img src={imgfloat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Answer;
