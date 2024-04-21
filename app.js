function openPopup() {
  var popup = document.getElementById("agePopup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("agePopup");
  popup.style.display = "none";
}

document.getElementById("dateForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  var userDate = document.getElementById("date").value;
  var userDob = new Date(userDate);

  var d = new Date();

  var nowYear = d.getFullYear() - userDob.getFullYear();
  var nowMonth = nowYear * 12;
  var nowDays = Math.round((d - userDob) / (1000 * 3600 * 24));
  var nowHours = nowDays * 24;

  var ageResults = 'You are ' + nowYear + ' Years old<br>' +
                  'You are ' + nowMonth + ' Months old<br>' +
                  'You are ' + nowDays + ' Days old<br>' +
                  'You are ' + nowHours + ' Hours old';

  document.getElementById("ageResults").innerHTML = ageResults;
  openPopup();
});
