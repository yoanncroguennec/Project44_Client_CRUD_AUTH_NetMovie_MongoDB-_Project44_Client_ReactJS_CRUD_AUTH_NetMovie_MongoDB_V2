import React, { useEffect, useRef } from "react";
import { BallMovement } from "../BallMovement";
import data from "../data/dataBrickObj";

export default function Board() {
  let bricks = [];
  let { ballObj, paddleProps, brickObj, player } = data;

  let x = 0;
  const canvasRef = useRef(null);

  useEffect(() => {
    function render() {
      // "const canvas = canvasRef.current;" est pareil "var canvas = document.getElementById("canvas")" mais en React JS et non JS pure
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Handle Ball Movement
      BallMovement(ctx, ballObj);

      if (
        ballObj.y - ballObj.rad <= 0 ||
        ballObj.y + ballObj.rad >= canvas.height
      ) {
        ballObj.dy *= -1;
      }


      if (
        ballObj.x + ballObj.rad >= canvas.width ||
        ballObj.x - ballObj.rad <= 0
      ) {
        ballObj.dy *= -1;
      }


    //   ctx.beginPath();
    //   ctx.fillStyle = "red";

    //   ctx.arc(x, 50, 20, 0, 2 * Math.PI);
    //   ctx.strokeStyle = "black";
    //   ctx.strokeWidth = 4;
    //   ctx.fill();
    //   ctx.stroke();
    //   x += 8;
      requestAnimationFrame(render);
    }

    render();
  }, []);

  return (
    <canvas
      id='canvas'
      height='500px'
      ref={canvasRef}
      width={window.innerWidth - 20}
    />
  );
}
