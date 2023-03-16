import React from "react";
import { useState } from "react";
import "./App.css";

export default function Tim() {
  const [task, setTask] = useState();
  const [time, setTime] = useState();
  const [time2, setTime2] = useState();
  const [show, setShow] = useState(false);
  let timestamp = time2 - time;

  return (
    <>
      <div className="bg">
        <div className="contain">
          <h1 className="title">Tim Park</h1>
          <div className="border">
            <div className="first">
              <p className="new">What is Tim doing?</p>
              <input
                className="input"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              ></input>
              <p>How long did Tim say it would take him? (in minutes)</p>
              <input
                className="input"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              ></input>
              <p>How long did it actually take him? (in minutes)</p>
              <input
                className="input"
                type="number"
                value={time2}
                onChange={(e) => setTime2(e.target.value)}
              ></input>
            </div>
            <div className="second">
              <div className="button">
                <button className="btn" onClick={() => setShow(!show)}>
                  Calculate
                </button>
              </div>
              {show && <p>Time said it would take him: {time} min</p>}
              {show && <p>It actually took him: {time2} min</p>}
              {show && (
                <p>
                  It took Tim {timestamp} min to get on because he was {task}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
