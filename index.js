class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear() - 1);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let blocks = 0;
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    if (this.beginningLocation.vertical > this.endingLocation.vertical) {
      blocks += (this.beginningLocation.vertical - this.endingLocation.vertical);
    } else {
      blocks += (this.endingLocation.vertical - this.beginningLocation.vertical);
    }

    if (eastWest.indexOf(this.beginningLocation.horizontal) > eastWest.indexOf(this.endingLocation.horizontal)) {
      blocks += (eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    } else {
      blocks += (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    }

    return blocks;
  }


  estimatedTime(peak) {
    let blocks = this.blocksTravelled()
    if (peak === true) {
      return blocks/2
    } else {
      return blocks/3
    }
  }

}
