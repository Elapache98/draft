"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */

/*adding library for polygons here*/
function closedPolygon(...args) {
    if (args.length < 2) {
        console.log("WARNING: No points defined")
        return "";
    }
    let polyString = "";
    // grab each pair of points and add to string of points
    for (let i = 0; i < args.length; i++) {
        polyString += args[i];
        polyString += " ";
    }

    polyString += args[0] + " " + args[1];

    return polyString; // send back our completed String
}


/*caterpillar cartoon*/

/*bugs head component*/
let BugHead = drawing.append('ellipse')
    .attr("cx", 80)
    .attr("cy", 295)
    .attr("rx", 30)
    .attr("ry", 30)
    /*the following hex code is for a light green color*/
    .attr("fill", "#B1F5A7");

/*bug body*/
let BugBody1 = drawing.append('ellipse')
    .attr("cx", 130)
    .attr("cy", 310)
    .attr("rx", 30)
    .attr("ry", 30)
    .attr("fill", "#5DB87D");

let BugBody2 = drawing.append('ellipse')
    .attr("cx", 160)
    .attr("cy", 280)
    .attr("rx", 30)
    .attr("ry", 30)
    /*the following hex code is for a light green color*/
    .attr("fill", "#B1F5A7");


let BugBody3 = drawing.append('ellipse')
    .attr("cx", 200)
    .attr("cy", 310)
    .attr("rx", 30)
    .attr("ry", 30)
    .attr("fill", "#5DB87D");

let BugBody4 = drawing.append('ellipse')
    .attr("cx", 235)
    .attr("cy", 300)
    .attr("rx", 30)
    .attr("ry", 30)
    /*the following hex code is for a light green color*/
    .attr("fill", "#B1F5A7");

let BugBody5 = drawing.append('ellipse')
    .attr("cx", 263)
    .attr("cy", 270)
    .attr("rx", 30)
    .attr("ry", 30)
    .attr("fill", "#5DB87D");

let BugBody6 = drawing.append('ellipse')
    .attr("cx", 295)
    .attr("cy", 290)
    .attr("rx", 30)
    .attr("ry", 30)
    /*the following hex code is for a light green color*/
    .attr("fill", "#B1F5A7");

let BugBody7 = drawing.append('ellipse')
    .attr("cx", 325)
    .attr("cy", 315)
    .attr("rx", 30)
    .attr("ry", 30)
    .attr("fill", "#5DB87D");

let BugBody8 = drawing.append('ellipse')
    .attr("cx", 355)
    .attr("cy", 295)
    .attr("rx", 20)
    .attr("ry", 20)
    /*the following hex code is for a light green color*/
    .attr("fill", "#B1F5A7");

let BugBody9 = drawing.append('ellipse')
    .attr("cx", 370)
    .attr("cy", 280)
    .attr("rx", 15)
    .attr("ry", 15)
    .attr("fill", "#5DB87D");



/*bugs antennae*/
let BugAntenna = drawing.append('line')
    .attr("x1", 55)
    .attr("y1", 250)
    .attr("x2", 65)
    .attr("y2", 268.5)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

let BugAntenna2 = drawing.append('line')
    .attr("x1", 55)
    .attr("y1", 250)
    .attr("x2", 30)
    .attr("y2", 250)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

let BugAntenna3 = drawing.append('line')
    .attr("x1", 80)
    .attr("y1", 270)
    .attr("x2", 70)
    .attr("y2", 250)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

let BugAntenna4 = drawing.append('line')
    .attr("x1", 70)
    .attr("y1", 250)
    .attr("x2", 50)
    .attr("y2", 245.5)
    .attr("stroke", "black")
    .attr('stroke-width', .75);


/*mouth component*/

let BugMouth = drawing.append('line')
    .attr("x1", 80)
    .attr("y1", 308)
    .attr("x2", 60)
    .attr("y2", 308)
    .attr("stroke", "black")
    .attr('stroke-width', 2);


/*bugs eye component*/

let BugEyLeft = drawing.append('ellipse')
    .attr("cx", 50)
    .attr("cy", 285)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

let BugEyeRight = drawing.append('ellipse')
    .attr("cx", 70)
    .attr("cy", 285)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");

/*butterfly cartoon*/

/*bottom wing component*/
let BottomWingLeft = drawing.append('polyline')
    .attr("points", closedPolygon(200, 100, 200, 200, 150, 100))
    .attr("transform", "translate(170,20)")
    /*the following hexcode is the closest orange I could find to the original drawing*/
    .attr("fill", "#F88D53");

let BottomWingRight = drawing.append('polyline')
    .attr("points", closedPolygon(100, 200, 150, 100, 100, 100))
    .attr("transform", "translate(280,20)")
    /*the following hexcode is the closest color I could find to the original drawing*/
    .attr("fill", "#F88D53");

/*top wing component*/
let TopWingRight = drawing.append('polyline')
    .attr("points", closedPolygon(350, 320, 300, 250, 264, 348))
    .attr("transform", "translate(110,-232)")
    .attr("fill", "yellow");

let TopWingLeft = drawing.append('polyline')
    .attr("points", closedPolygon(250, 332, 350, 350, 300, 264))
    .attr("transform", "translate(25,-235.5)")
    .attr("fill", "yellow");


/*butterfly body component*/
let ButterflyBody = drawing.append('rect')
    .attr("x", 370)
    .attr("y", 60)
    .attr("width", 10)
    .attr("height", 150)
    .attr("fill", "lightgreen");

/*butterfly antennae*/
let ButterflyAntennaLeft = drawing.append('line')
    .attr("x1", 350)
    .attr("y1", 25)
    .attr("x2", 365)
    .attr("y2", 50)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

let ButterflyAntennaRight = drawing.append('line')
    .attr("x1", 400)
    .attr("y1", 25)
    .attr("x2", 385)
    .attr("y2", 50)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

/*butterfly eyes*/
let ButterflyEyeLeft = drawing.append('ellipse')
    .attr("cx", 365)
    .attr("cy", 60)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("fill", "red");

let ButterflyEyeRight = drawing.append('ellipse')
    .attr("cx", 385)
    .attr("cy", 60)
    .attr("rx", 10)
    .attr("ry", 10)
    .attr("fill", "red");

