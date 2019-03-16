// function buildMetadata(sample) {

//   // @TODO: Complete the following function that builds the metadata panel

//   // Use `d3.json` to fetch the metadata for a sample
  var satisfactiondata;
//   var panel;

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
//     // BONUS: Build the Gauge Chart
//     // buildGauge(data.WFREQ);
//   });
// }

function buildCharts(sample) {
  var sampleData;
  var sample = 940
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/satisfactiondata`).then(function(response){
    // @TODO: Build a Bubble Chart using the sample data
    satisfactionData = response;
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
    // var daySafe = satisfactionsData.safety_day;
    // var nightSafe = satisfactionsData.safety_night;
    // var parksSafe = satisfactionsData.safety_parks;

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
  

//     // PIE CHART

//     var topSamples = sample.slice(0, 10);
//     var topOtu = otu.slice(0,10);
//     var topLabels = labels.slice(0,10);

//     var pieData = [{
//       values: topSamples,
//       labels: topOtu,
//       type: 'pie',
      // hovertext: topLabels,
      // hoverinfo: 'label+text+value+percent',
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
