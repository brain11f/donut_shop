(function() {
  var Locations = window.Locations;

  var dataTable = document.getElementById('myTable');
  var addNewLocation = document.getElementById('newLocation');

  addNewLocation.addEventListener('submit', function(event) {
    event.preventDefault();
    var newLoc = (new Locations(event.target.newLocIn.value, {min: Number.parseFloat(event.target.newMinIn.value), max: Number.parseFloat(event.target.newMaxIn.value), avg: Number.parseFloat(event.target.newAveIn.value)}));
    event.target.newLocIn.value = '';
    event.target.newMinIn.value = '';
    event.target.newMaxIn.value = '';
    event.target.newAveIn.value = '';
    dataTable.appendChild(newLoc.render());
  });
})();
