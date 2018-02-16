$(document).ready(function() {
        console.log("Hello world");
});
$("#falH").click(function(e) {
  e.preventDefault();
  var myurl = "https://api.spacexdata.com/v2/rockets/falconheavy";
  var retty = "#heavyResults";
  getData(myurl,retty);

});

$("#fal1").click(function(e) {
  e.preventDefault();
  var myurl = "https://api.spacexdata.com/v2/rockets/falcon1";
  var retty = "#oneResults";
  getData(myurl,retty);

});

$("#fal9").click(function(e) {
  e.preventDefault();
  var myurl = "https://api.spacexdata.com/v2/rockets/falcon9";
  var retty = "#nineResults";
  getData(myurl,retty);

});

function getData(myurl,retty){
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(json){
      console.log(json);
      var results = "";
      results += "<ul>\n<li>"+json.description+"</li>";
      results += "<li>This rocket can send different payloads to the following orbits: ";
      for(var i = 0; i < json.payload_weights.length;i++){
        results += "<br>"+json.payload_weights[i].name + ": " + json.payload_weights[i].kg + "kg";
      }
      results += "</li>";
      results += "<li><p>Cost per launch: $" + json.cost_per_launch+"</p></li>";
      results += "<li><p>Launch success rate: " + json.success_rate_pct+"</p></li>";
      results += "<li>We hope the previous information was helpful."
      results += " If you'd like more information, please call us at 990-9999</li>"
      results += "</ul>";
      $(retty).html(results);
	console.log("Finish");
    }
  })
}

