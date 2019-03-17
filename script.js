function drawLineChart() {

  var jsonData = $.ajax({
    url: 'https://cors.io/?https://s3.eu-central-1.amazonaws.com/pms3003/data.json',
    dataType: 'json',
  }).done(function (results) {

    // Split timestamp and data into separate arrays
	var eventpm1 = [];
	var eventpm25 = [];
    var eventpm10 = [];
	var eventdt = [];
    results.forEach(function(item) {
      eventpm1.push(item.pm1);
	  eventpm25.push(item.pm25);
	  eventpm10.push(item.pm10);
	  eventdt.push(item.dt);
    });

    // Create the chart.js data structure using 'labels' and 'data'
    var tempData = {
      labels : eventdt,
      datasets : [
		{
          label: "pm1",
		  fillColor             : "rgba(151,187,205,0.2)",
          strokeColor           : "rgba(151,187,205,1)",
          pointColor            : "rgba(151,187,205,1)",
          pointStrokeColor      : "#fff",
          pointHighlightFill    : "#fff",
          pointHighlightStroke  : "rgba(151,187,205,1)",
          data                  : eventpm1,
		  hidden				: true
		},
		{
		  label: "pm2.5",
		  fillColor             : "rgba(220,220,220,0.2)",
          strokeColor           : "rgba(220,220,220,1)",
          pointColor            : "rgba(220,220,220,1)",
          pointStrokeColor      : "#fff",
          pointHighlightFill    : "#fff",
          pointHighlightStroke  : "rgba(220,220,220,1)",
          data                  : eventpm25
		},
		{
		  label: "pm10",
		  fillColor             : "rgba(200,200,200,0.2)",
          strokeColor           : "rgba(200,200,200,1)",
          pointColor            : "rgba(200,200,200,1)",
          pointStrokeColor      : "#fff",
          pointHighlightFill    : "#fff",
          pointHighlightStroke  : "rgba(200,200,200,1)",
          data                  : eventpm10
		}
	  ]
    };

    // Get the context of the canvas element we want to select
    var ctx = document.getElementById("pms3003").getContext("2d");

    // Instantiate a new chart
    var myNewChart = new Chart(ctx , {
		type: "line",
		data: tempData, 	
    });
  });
}

drawLineChart();
