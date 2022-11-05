const timer = {
  name: "Hyojina",
  timeoutArrow: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
  timeoutNormal: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeoutArrow(); // Hyojina
timer.timeoutNormal(); //
