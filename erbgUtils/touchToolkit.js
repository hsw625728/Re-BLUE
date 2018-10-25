// "unknown" 未知状态

class touchToolkit {
  constructor() {
    this.startPos = [0, 0];
    this.oldPos = [0, 0];
    this.touchMode = "unknown";
  }

  touchStart(event) {
    this.startPos = {
      x: event.touches[0].pageX,
      y: event.touches[0].pageX
    };

    this.oldPos = this.startPos;

    this.touchMode = "start";
  }

  touchMove(event) {
    let current = {
      x: event.touches[0].pageX,
      y: event.touches[0].pageX
    };
    let tx = current.x - this.oldPos.x
    let ty = current.y - this.oldPos.y

    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0) {
        this.touchMode = "left";
      } else if (tx > 0) {
        this.touchMode = "right";
      }

    } else {
      if (ty < 0) {
        this.touchMode = "down";

      } else if (ty > 0) {
        this.touchMode = "up";
      }
    }

    this.oldPos = current;

    console.log(">>>>>>>>>>>>>>>>>>>>>> showTopAni: move ");
  }

  touchEnd(event) {}
}

module.exports = {
  touchToolkit: function () {
    return new touchToolkit();
  }
}