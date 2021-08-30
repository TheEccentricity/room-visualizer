import React, { useEffect } from "react";
import room1 from "./room1.jpg";

function Visualizer() {

    function spreadColor(canvas, canvasContext, event) {
        let x = event.offsetX;
        let y = event.offsetY;
        canvasContext.fillStyle = "brown";
        let rgbLiteral = canvasContext.getImageData(x, y, 1, 1).data.join(",");
        for (let xindex = 0, xindexRight = x; xindex < x, xindexRight < canvas.width; xindex++, xindexRight++) {
            for (let yindex = 0, yindexBottom = y; yindex < y, yindexBottom < canvas.height; yindex++, yindexBottom++) {
                const isSameColor = (rgbLiteral === canvasContext.getImageData(xindex, yindex, 1, 1).data.join(","));
                const isSameColorRight = (rgbLiteral === canvasContext.getImageData(xindexRight, yindex, 1, 1).data.join(","));
                const isSameColorBottom = (rgbLiteral === canvasContext.getImageData(xindex, yindexBottom, 1, 1).data.join(","));
                const isSameColorBottom2 = (rgbLiteral === canvasContext.getImageData(xindexRight, yindexBottom, 1, 1).data.join(","));
                if (isSameColor) canvasContext.fillRect(xindex, yindex, 1, 1);
                if (isSameColorRight) canvasContext.fillRect(xindexRight, yindex, 1, 1);
                if (isSameColorBottom) canvasContext.fillRect(xindex, yindexBottom, 1, 1);
                if (isSameColorBottom2) canvasContext.fillRect(xindexRight, yindexBottom, 1, 1);
            }
        }
    }

    useEffect(() => {
        // let room = document.getElementById("room");
        let canvas = document.querySelector("canvas");
        let ctx = canvas.getContext("2d");
        let img = new Image();
        img.src = room1;
        // ctx.fillStyle = "grey";
        // ctx.fillRect(20, 20, 150, 100);
        img.addEventListener("load", () => {
            ctx.drawImage(img, 10, 10, canvas.width, canvas.height);
        })
        canvas.addEventListener("click", (e) => {
            spreadColor(canvas, ctx, e);
        })
    })
    return (
        <div>
            <div className="flex align-center full-height">
                <div className="flex-1"></div>
                <div className="flex-2" id="visualizer">
                    <div className="v-div padding">
                        {/* <div>Visualize your room</div> */}
                        <div className="relative">
                            <canvas id="canvas" height="500" width="700"></canvas>
                        </div>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    )
}

export default Visualizer;