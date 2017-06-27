import React, { Component } from 'react'

class GardenContainer extends Component {

  constructor(){
    super()
    this.state = {
      // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
      // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
      // But we aren't checking anything else! We could put "Lalala" for the value of x
      x: x || 0;
      y: y || 0;
      w: w || 1;
      h: h || 1;
      fill: fill || '#AAAAAA';
    }
    this.draw = this.draw.bind(this)
    this.contains = this.draw.bind(this)
  }

// Draws this shape to a given context
  draw (context) {
    context.fillStyle = this.fill;
    context.fillRect(this.x, this.y, this.w, this.h);
  }

// Determine if a point is inside the shape's bounds
 contains (mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
    return  (this.x <= mx) && (this.x + this.w >= mx) &&
            (this.y <= my) && (this.y + this.h >= my);
  }


}

export default Shape
