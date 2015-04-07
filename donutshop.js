//(function() {

      var Locations = function(min, max, avg) {
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.donutsHour = [];
    };

    Locations.prototype.generateCustomers = function() {
      var newCustomers = Math.floor(Math.random() * this.max - this.min +1) + this.min;
      return newCustomers * this.avg;
    };

    Locations.prototype.donutsPerHour = function() {
      var perDay = 0;
      for (i = 0; i <= 11; i++) {
      var donutsHourTotal = this.generateCustomers();
      this.donutsHour.push(donutsHourTotal);
      perDay += donutsHourTotal;
      }
      return perDay;
    };

    //Locations.prototype.render = function() {

    //};

      var Downtown = new Locations(8, 43, 4.5);
      var CapitalHill = new Locations(4, 37, 2);
      var SouthLakeUnion = new Locations(9, 23, 6.33);
      var Wedgewood = new Locations(2, 28, 1.25);
      var Ballard = new Locations(8, 58, 3.75);

    //Post.prototype.render = function() {

        //for(var i = 0; i < this.comments.length; i++) {
          //commentsEl.appendChild(this.comments[i].render());
        //}
      //};
//})();
