//function() {

    var Locations = function(min, max, avg, name) {
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.donutsHour = [];
      this.name = name;
    };

    Locations.prototype.donutsPerHour = function() {
      var newCustomers = Math.floor(Math.random() * this.max - this.min + 1) + this.min;
      return Math.round(newCustomers * this.avg);
    };

    Locations.prototype.donutsPerDay = function() {
      var perDay;
      for (i = 0; i <= 11; i++) {
      var donutsHourTotal = this.donutsPerHour();
      this.donutsHour.push(donutsHourTotal);
      perDay += donutsHourTotal;
      }
      return perDay;
    };

    Locations.prototype.render = function() {
      var dailyTotal = this.donutsPerDay();
      var elTr = document.getElementById(this.name);
      for (var i = 0; i <= this.donutsHour.length; i++) {
        var el = document.createElement('td');
        el.textContent = this.donutsHour[i];
        elTr.appendChild(el);
      }
      el.textContent = dailyTotal;
      elTr.appendChild(el);
    };

      var Downtown = new Locations(8, 43, 4.5, 'Downtown');
      var CapitalHill = new Locations(4, 37, 2, 'CapitalHill');
      var SouthLakeUnion = new Locations(9, 23, 6.33, 'SouthLakeUnion');
      var Wedgewood = new Locations(2, 28, 1.25, 'Wedgewood');
      var Ballard = new Locations(8, 58, 3.75, 'Ballard');
      Downtown.render();
      CapitalHill.render();
      SouthLakeUnion.render();
      Wedgewood.render();
      Ballard.render();

//})();
