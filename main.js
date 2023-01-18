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
let bugHead = drawing.append('ellipse')
    .attr("cx", 80)
    .attr("cy",295)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "lightgreen");

/*bug body*/
let bugBody1 = drawing.append('ellipse')
    .attr("cx", 130)
    .attr("cy",310)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "green");

let bugBody2 = drawing.append('ellipse')
    .attr("cx", 160)
    .attr("cy",280)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "lightgreen");

let bugBody3 = drawing.append('ellipse')
    .attr("cx", 200)
    .attr("cy", 310)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "green");

let bugBody4 = drawing.append('ellipse')
    .attr("cx", 235)
    .attr("cy", 300)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "lightgreen");

let bugBody5 = drawing.append('ellipse')
    .attr("cx", 263)
    .attr("cy", 270)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "green");

let bugBody6 = drawing.append('ellipse')
    .attr("cx", 295)
    .attr("cy", 290)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "lightgreen");

let bugBody7 = drawing.append('ellipse')
    .attr("cx", 325)
    .attr("cy", 315)
    .attr("rx", 30)
    .attr("ry",30)
    .attr("fill", "green");

let bugBody8 = drawing.append('ellipse')
    .attr("cx", 355)
    .attr("cy", 295)
    .attr("rx", 20)
    .attr("ry",20)
    .attr("fill", "lightgreen");

let bugBody9 = drawing.append('ellipse')
    .attr("cx", 370)
    .attr("cy", 280)
    .attr("rx", 15)
    .attr("ry",15)
    .attr("fill", "green");



/*bugs antennae*/
let bugAntenna = drawing.append ('line')
    .attr("x1", 55)
    .attr("y1",250)
    .attr("x2",65)
    .attr("y2",268.5)
    .attr("stroke", "black")
    .attr('stroke-width',.75);

let bugAntenna2 = drawing.append ('line')
    .attr("x1", 55)
    .attr("y1",250)
    .attr("x2",30)
    .attr("y2",250)
    .attr("stroke", "black")
    .attr('stroke-width',.75);

let bugAntenna3 = drawing.append ('line')
    .attr("x1", 80)
    .attr("y1",270)
    .attr("x2",70)
    .attr("y2",250)
    .attr("stroke", "black")
    .attr('stroke-width',.75);

let bugAntenna4 = drawing.append ('line')
.attr("x1",70)
.attr("y1",250)
.attr("x2",50)
.attr("y2",245.5)
.attr("stroke", "black")
.attr('stroke-width',.75);


/*mouth component*/

let bugMouth = drawing.append('line')
    .attr("x1", 80)
    .attr("y1",308)
    .attr("x2",60)
    .attr("y2",308)
    .attr("stroke", "black")
    .attr('stroke-width', 2);


/*bugs eye component*/

let bugEye = drawing.append('ellipse')
    .attr("cx", 50)
    .attr("cy",285)
    .attr("rx", 5)
    .attr("ry",5)
    .attr("fill", "black");

let bugEye2 = drawing.append('ellipse')
    .attr("cx", 70)
    .attr("cy",285)
    .attr("rx", 5)
    .attr("ry",5)
    .attr("fill", "black");

/*butterfly cartoon*/
    
/*bottom wing component*/
let bottomWing = drawing.append('polyline')
    .attr("points", closedPolygon(200,100,200,200,150,100))
    .attr("transform", "translate(180,20)" )
    .attr("fill", "orange");

let bottomWing2 = drawing.append('polyline')
    .attr("points", closedPolygon(100,200,150,100,100,100))
    .attr("transform", "translate(290,20)" )
    .attr("fill", "orange");

/*top wing component*/
let topWing = drawing.append('polyline')
    .attr("points", closedPolygon(350,320,300,250,264,348))
    .attr("transform", "translate(120,-232)" )
    .attr("fill", "yellow");

let topWing2 = drawing.append('polyline')
    .attr("points", closedPolygon(250,332,350,350,300,264))
    .attr("transform", "translate(40,-235.5)" )
    .attr("fill", "yellow");


/*butterfly body component*/
let butterflyBody = drawing.append('rect')
    .attr("x", 380)
    .attr("y", 60)
    .attr("width", 10)
    .attr("height", 150)
    .attr("fill", "lightgreen");

/*butterfly antennae*/
let butterflyAntenna= drawing.append('line')
    .attr("x1", 360)
    .attr("y1",25)
    .attr("x2",375)
    .attr("y2",55)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

let butterflyAntenna2= drawing.append('line')
    .attr("x1", 400)
    .attr("y1",25)
    .attr("x2",390)
    .attr("y2",55)
    .attr("stroke", "black")
    .attr('stroke-width', .75);

/*butterfly eyes*/
let butterflyEye = drawing.append('ellipse')
    .attr("cx", 375)
    .attr("cy",60)
    .attr("rx", 10)
    .attr("ry",10)
    .attr("fill", "red");

let butterflyEye2 = drawing.append('ellipse')
    .attr("cx", 394)
    .attr("cy",60)
    .attr("rx", 10)
    .attr("ry",10)
    .attr("fill", "red");

