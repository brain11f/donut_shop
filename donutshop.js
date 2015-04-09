//(function() {

    var shops = [];
    var Locations = function(locationName, options) {
      this.locationName = locationName;
      this.min = options.min;
      this.max = options.max;
      this.avg = options.avg;
      this.opens = options.opens || 700;
      this.closes = options.closes || 1800;
      this.hoursOpen = (this.closes - this.opens)/100;
      this.donutsHour = [];
    };

var test1 = new Locations ('Downtown', {min: 8, max: 43, avg: 4.5});
var test2 = new Locations ('Capitol Hill', {min: 4, max: 37, avg: 2});
var test3 = new Locations ('South Lake Union', {min: 9, max: 23, avg: 6.33});
var test4 = new Locations ('Wedgewood', {min: 2, max: 28, avg: 1.25});
var test5 = new Locations ('Ballard', {min: 8, max: 58, avg: 3.75});

shops.push(test1, test2, test3, test4, test5);


    Locations.prototype.donutsRandom = function() {
      var newCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      return newCustomers;
    };

    Locations.prototype.donutsPerHour = function() {
      for (i = 0; i <= this.hoursOpen; i++) {
        var amountSold = this.donutsRandom() * this.avg;
        this.donutsHour.push(amountSold);
        };
    };

    Locations.prototype.donutsPerDay = function() {
    var all = 0;
      for (var i = 0; i < this.donutsHour.length; i++) {
        all += this.donutsHour[i];
      }
      return all;
    };

    Locations.prototype.render = function() {
      this.donutsPerHour();
      var locationInfo = this.donutsHour.join([separator = '</td><td>'])
      var newRow = document.createElement('tr');
      newRow.innerHTML = '<th class="location">' + this.locationName + '</th><td>' + locationInfo + '</td><td class="daily-total">' + this.donutsPerDay() + '</td>';
      var position = document.getElementById('myTable');
      position.appendChild(newRow);
      return newRow;
    }

test1.render();
test2.render();
test3.render();
test4.render();
test5.render();

window.Locations.locationName = Locations;

//})();
