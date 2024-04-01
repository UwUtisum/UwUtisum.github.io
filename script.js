function openCity(evt, cityName) {
  var i, tabcontent, tab;
	
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
	
  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }
	
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
	
}