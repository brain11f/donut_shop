(function() {
    var Locations = function(min, max, avg, name, hoursOfOperations) {
      this.min = min;
      this.max = max;
      this.avg = avg;
      this.donutsHour = [];
      this.name = name;
      this.perDay = 0;
      this.hoursOfOperations = hoursOfOperations;
    };

    Locations.prototype.donutsPerHour = function() {
      var newCustomers = Math.floor(Math.random() * this.max - this.min + 1) + this.min;
      return Math.round(newCustomers * this.avg);
    };

    Locations.prototype.donutsPerDay = function() {
      for (i = 0; i <= this.hoursOfOperations; i++) {
      var donutsHourTotal = this.donutsPerHour();
      this.donutsHour.push(donutsHourTotal);
      this.perDay += donutsHourTotal;
      }
    };

    Locations.prototype.renderNewRow = function() {
      var tableRef = document.getElementById('myTable');
      var newRow   = tableRef.insertRow(tableRef.rows.length);
      var newCell  = newRow.insertCell(0);
      var newText  = document.createTextNode('new row')
      newCell.appendChild(newText);
        var tr = document.createElement('tr');
      };

    Locations.prototype.render = function() {
      var elTr = document.getElementById(this.name);
      for (var i = 0; i <= this.donutsHour.length; i++) {
        var el = document.createElement('td');
        el.textContent = this.donutsHour[i];
        elTr.appendChild(el);
      }
      el.textContent = this.perDay;
      elTr.appendChild(el);
    };

      var Downtown = new Locations(8, 43, 4.5, 'Downtown', 11);
      var CapitalHill = new Locations(4, 37, 2, 'CapitalHill', 11);
      var SouthLakeUnion = new Locations(9, 23, 6.33, 'SouthLakeUnion', 11);
      var Wedgewood = new Locations(2, 28, 1.25, 'Wedgewood', 11);
      var Ballard = new Locations(8, 58, 3.75, 'Ballard', 11);
      Downtown.donutsPerDay();
      Downtown.render();
      CapitalHill.donutsPerDay();
      CapitalHill.render();
      SouthLakeUnion.donutsPerDay();
      SouthLakeUnion.render();
      Wedgewood.donutsPerDay();
      Wedgewood.render();
      Ballard.donutsPerDay();
      Ballard.render();

      var submitButton = document.getElementById('submitlocation');

      submitButton.addEventListener('click', function () {
      //var loc = new Locations(event.target.name.value) //in the order of my constructer functions perametersdasdjsdk
      //alert(loc.value);
      //console.log(loc);
      //loc.donutsPerDay();
      //loc.renderNewRow();
      //loc.render();
      var loc = new Locations([document.getElementById('value1'),document.getElementById('value2'),document.getElementById('value3'),document.getElementById('value4'),document.getElementById('value5')]);
      console(loc.value);
   });


})();
