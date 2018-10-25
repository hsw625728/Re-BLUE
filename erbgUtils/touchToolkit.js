// "unknown" 未知状态

class touchToolkit {
  constructor() {
    this.startPos = [0, 0];
    this.oldPos = [0, 0];
    this.touchMode = "unknown";
    this.endMode = "unknown";
  }

  touchStart(event, call) {
    this.startPos = {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
    };

    this.oldPos = this.startPos;

    this.touchMode = "start";
    this.endMode = "start";

    if (typeof (call) == "function")
    {
      call();
    }
  }

  touchMove(event, call) {
    let current = {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY
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

    if (typeof (call) == "function") {
      call();
    }
  }

  touchEnd(event, call) {
    let current = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY
    };
    let tx = current.x - this.startPos.x
    let ty = current.y - this.startPos.y

    if (Math.abs(tx) > Math.abs(ty)) {
      if (tx < 0) {
        this.endMode = "left";
      } else if (tx > 0) {
        this.endMode = "right";
      }

    } else {
      if (ty < 0) {
        this.endMode = "down";
      } else if (ty > 0) {
        this.endMode = "up";
      }
    }

    if (typeof (call) == "function") {
      call();
    }
  }
}

module.exports = {
  touchToolkit: function() {
    return new touchToolkit();
  }
}