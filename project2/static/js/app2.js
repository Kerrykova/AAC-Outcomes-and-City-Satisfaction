function buildCharts(sample) {
  var sampleData;
  var sample = 940
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/samples/${sample}`).then(function(response){
    // @TODO: Build a Bubble Chart using the sample data
    sampleData = response;
    // @TODO: Build a Pie Chart
    //var outcomeAge = sampleData.outcomeAge;
    //var type = sampleData.type;
    //var breed = sampleData.breed;
    
    
    //PIE CHART

    var outcomeAge = outcomeAge;
    var type = type;
    var breed = breed.slice(0,10);

    var outcomeAgeLabels = outcomeAgeLabels;
    var typeLabels = typeLabels;
    var breedLabels = breedLabels;

    var TypeData = [{
      values: type,
      labels: typeLabels,
      type: 'pie',
      // hovertext: topLabels,
      // hoverinfo: 'label+text+value+percent',
    }];
    
    var BreedData = [{
      values: breed,
      labels: breedLabels,
      type: 'pie',
      // hovertext: topLabels,
      // hoverinfo: 'label+text+value+percent',
    }];

    var outcomeAgeData = [{
      values: outcomeAge,
      labels: outcomeAgeLabels,
      type: 'pie',
      // hovertext: topLabels,
      // hoverinfo: 'label+text+value+percent',
    }];


    var pieLayout = {
      height: 500,
      width: 500
    };
    
    Plotly.newPlot('pie', pieData, pieLayout);

  
  //create the chart
    var chart = animalType.pie();
    var chart = animalBreed.pie();
    var chart = animaloutcomeAge.pie();

  //set the chart title
  AustinAnimals.title;

  //add the data
  chart.data(data);

  //display the chart in the container
  chart.container('container');
  chart.draw();
  }
  )};