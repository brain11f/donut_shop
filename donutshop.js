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
    }

shops.push(new Locations ('Downtown', {min: 8, max: 43, avg: 4.5}))
shops.push(new Locations ('Capitol Hill', {min: 4, max: 37, avg: 2}))
shops.push(new Locations ('South Lake Union', {min: 9, max: 23, avg: 6.33}))
shops.push(new Locations ('Wedgewood', {min: 2, max: 28, avg: 1.25}))
shops.push(new Locations ('Ballard', {min: 8, max: 58, avg: 3.75}))

    Locations.prototype.donutsRandom = function() {
      var newCustomers = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      return newCustomers;
    }

    Locations.prototype.donutsPerHour = function() {
      for (i = 0; i <= this.hoursOpen; i++) {
        var amountSold = this.donutsRandom() * this.avg;
        this.donutsHour.push(amountSold);
        };
    }

    Locations.prototype.donutsPerDay = function() {
    var all = 0;
    for (var i = 0; i < this.donutsHour.length; i++) {
    all += this.donutsHour[i];
    }
    return all;
}

    Locations.prototype.render = function() {
      this.donutsPerHour();
      var locationInfo = this.donutsHour.join([separator = '</td><td>'])
      var newRow = document.createElement('tr');
      newRow.innerHTML = '<th class="location">' + this.locationName + '</th><td>' + locationInfo + '</td><td class="daily-total">' + this.donutsPerDay() + '</td>';
      var position = document.getElementById('myTable');
      position.appendChild(newRow);
      return newRow;
    }

    for (var i = 0; i < shops.length; i++) {
  shops[i].render();
};


window.Locations.locationName = Locations;

//})();
