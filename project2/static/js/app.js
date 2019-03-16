
var satisfactiondata;


// d3.json(`/satisfactiondata`).then(function(response){
//   satisfactionsample = response;
//   // Use d3 to select the panel with id of `#sample-metadata`
//   panel = d3.select("#sample-metadata");
//   // Use `.html("") to clear any existing metadata
//   d3.select("#sample-metadata").html("");
//   // Use `Object.entries` to add each key and value pair to the panel
//   // Hint: Inside the loop, you will need to use d3 to append new
//   // tags for each key-value in the metadata.
//   Object.entries(metasample).forEach(([key, value]) => {
//       var cell = panel.append("div");
//       cell.text(`${key}: ${value}`);
//   });
// }


function buildCharts(satisfaction) {
// @TODO: Use `d3.json` to fetch the sample data for the plots
d3.json(`/satisfactiondata`).then(function(response){
  // @TODO: Build a Bubble Chart using the sample data
  satisfactionData = response;

  var safety_day_mapped = satisfactionData.map(satisfactionData => satisfactionData.safety_day);
  var safety_night_mapped = satisfactionData.map(satisfactionData => satisfactionData.safety_night);
  var safety_parks_mapped = satisfactionData.map(satisfactionData => satisfactionData.safety_parks);

  console.log(safety_day_mapped);
  console.log(safety_night_mapped);
  console.log(safety_parks_mapped);

  function wordCount(data) {
  //   // An object to hold word frequency
    var wordFrequency = {};
  
  //   // Iterate through the array
    for (var i = 0; i < data.length; i++) {
      var currentWord = data[i];
      // If the word has been seen before...
      if (currentWord in wordFrequency) {
  //       // Add one to the counter
        wordFrequency[currentWord] += 1;
      }
      else {
        // Set the counter at 1
        wordFrequency[currentWord] = 1;
      }
    }
    console.log(wordFrequency);
    var agree = wordFrequency.Agree;
    var str_agree = wordFrequency["Strongly Agree"];
    var str_disagree = wordFrequency["Strongly Disagree"];
    var neutral = wordFrequency.Neutral;
    var disagree = wordFrequency.Disagree;
    var total = agree + neutral + disagree + str_agree + str_disagree;
    var total_sat = agree +str_agree;
    // console.log (total);

    var total_sat_percent = (total_sat / total)*100

    console.log(total_sat_percent);
    return wordFrequency;
  }
  
  wordCount(safety_day_mapped);
  // wordCount(safety_night_mapped);
  // wordCount(safety_parks_mapped);
console.log(satisfactionData);


  // SAFETY LINE CHART

  var safety_day_line = {
    x: [2015, 2016, 2017],
    y: [],
    type: 'scatter',
    name: 'Day'
  };

  var safety_night_line = {
    x: [2015, 2016, 2017],
    y: [],
    type: 'scatter',
    name: 'Night'
  };

  var safety_parks_line = {
    x: [2015, 2016, 2017],
    y: [],
    type: 'scatter',
    name: 'Park'
  };

  var safety_data = [safety_day_line, safety_night_line, safety_parks_line];
  var layout = {
    title: 'Percent of Residents who Feel Safe by Year',
    xaxis: {
      title: 'Year',
      // showgrid: false,
      // zeroline: false
    },
    yaxis: {
      title: 'Percent Satisfied',
      range: [0, 100],
      // showline: false
    }
  };

  Plotly.newPlot('sample-safetydata', safety_data, layout);


//     var pieData = [{
//       values: topSamples,
//       labels: topOtu,
//       type: 'pie',
//       hovertext: topLabels,
//       hoverinfo: 'label+text+value+percent',
//     }];
  
//     var pieLayout = {
//       height: 500,
//       width: 500
//     };
  
//     Plotly.newPlot('pie', pieData, pieLayout);

//     // BUBBLE CHART
//     var trace1 = {
//       x: otu,
//       y: sample,
//       text: labels,
//       mode: 'markers',
//       marker: {
//         color: otu,
//         opacity: [1, 0.8, 0.6, 0.4],
//         size: sample
//       }
//     };
  
//     var data = [trace1];
  
//     var layout = {
//       title: 'Belly Button Biodiversity',
//       showlegend: false,
//       height: 500,
//       width: 1200
//     };
  
//     Plotly.newPlot('bubble', data, layout);

// ANIMAL OUTCOME LINE CHART

var dog = {
x: [2015, 2016, 2017],
y: [],
type: 'scatter',
name: 'Dog'
};

var cat = {
x: [2015, 2016, 2017],
y: [],
type: 'scatter',
name: 'Cat'
};

var livestock = {
x: [2015, 2016, 2017],
y: [],
type: 'scatter',
name: 'Livestock'
};

var bird = {
x: [2015, 2016, 2017],
y: [],
type: 'scatter',
name: 'Bird'
};

var animal_outcome_data = [dog, cat, livestock, bird];
var layout = {
title: 'Percent of Animals Adopted and Returned to Owner',
xaxis: {
  title: 'Year',
  // showgrid: false,
  // zeroline: false
},
yaxis: {
  title: 'Percent Adopted and Returned to Owner',
  range: [0, 100],
  // showline: false
}
};

Plotly.newPlot('myDiv', animal_outcome_data, layout);
});
}


function init() {
// Grab a reference to the dropdown select element
// var selector = d3.select("#selDataset");

// // Use the list of sample names to populate the select options
// // need to make unique(breed) then can use for the type of breeds in pie/line
// d3.json("/aacdata").then((breeds) => {
//   breeds.forEach((breed) => {
//     selector
//       .append("option")
//       .text(breed)
//       .property("value", breed);
//   });

  // Use the first sample from the list to build the initial plots
  // const firstSample = sampleNames[0];
  buildCharts();
  // buildMetadata(firstSample);
// });
};

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }

// Initialize the dashboard
init();
