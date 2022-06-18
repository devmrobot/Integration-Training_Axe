var map = L.map("map").setView([48.862725, 2.287592], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 10,
}).addTo(map);

var marker = L.marker([48.862725, 2.287592]).addTo(map);

marker.bindPopup("<a href='https://www.google.fr/maps/place/32+Rue+Ren%C3%A9+Boulanger,+75010+Paris/@48.8689075,2.359354,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66e0ed99d2c87:0x71f122842172f9f2!8m2!3d48.868904!4d2.361548'>intinéraire</a>");