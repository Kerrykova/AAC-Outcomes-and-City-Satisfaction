// function buildMetadata(sample) {

//   // @TODO: Complete the following function that builds the metadata panel

//   // Use `d3.json` to fetch the metadata for a sample
//   var metadata;
//   var panel;

//   d3.json(`/metadata/${sample}`).then(function(response){
  
//     metasample = response;
//     // Use d3 to select the panel with id of `#sample-metadata`
//     panel = d3.select("#sample-metadata");
//     // Use `.html("") to clear any existing metadata
//     d3.select("#sample-metadata").html("");
//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(metasample).forEach(([key, value]) => {
//         var cell = panel.append("div");
//         cell.text(`${key}: ${value}`);
//     });
//     // BONUS: Build the Gauge Chart
//     // buildGauge(data.WFREQ);
//   });
// }

// function buildCharts(sample) {
//   var sampleData;
//   var sample = 940
//   // @TODO: Use `d3.json` to fetch the sample data for the plots
//   d3.json(`/samples/${sample}`).then(function(response){
//     // @TODO: Build a Bubble Chart using the sample data
//     sampleData = response;
//     // @TODO: Build a Pie Chart
//     // HINT: You will need to use slice() to grab the top 10 sample_values,
//     // otu_ids, and labels (10 each).
//     var sample = sampleData.sample_values;
//     var otu = sampleData.otu_ids;
//     var labels = sampleData.otu_labels;

//     // PIE CHART

//     var topSamples = sample.slice(0, 10);
//     var topOtu = otu.slice(0,10);
//     var topLabels = labels.slice(0,10);

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
    

//   });
// }

// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");

//   // Use the list of sample names to populate the select options
//   d3.json("/names").then((sampleNames) => {
//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });

//     // Use the first sample from the list to build the initial plots
//     const firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
// }

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }

// // Initialize the dashboard
// init();


// SAFETY LINE CHART

var safety_day = {
  x: [2015, 2016, 2017],
  y: [],
  type: 'scatter',
  name: 'Day'
};

var safety_night = {
  x: [2015, 2016, 2017],
  y: [],
  type: 'scatter',
  name: 'Night'
};

var safety_parks = {
  x: [2015, 2016, 2017],
  y: [],
  type: 'scatter',
  name: 'Park'
};

var safety_data = [safety_day, safety_night, safety_parks];
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

Plotly.newPlot('myDiv', safety_data, layout);


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
