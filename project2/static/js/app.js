
var satisfactionData;
var animalData;

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

function buildSatCharts(satisfaction) {
// @TODO: Use `d3.json` to fetch the sample data for the plots
d3.json(`/satisfactiondata`).then(function(response){
  // @TODO: Build a Bubble Chart using the sample data
  satisfactionData = response;
  // console.log(satisfactionData);
  var sat2015list = [];
  var sat2016list = [];
  var sat2017list = [];

  satisfactionData.forEach(element => {
    if (element.year === 2015){
      sat2015list.push(element)
    }
    if (element.year === 2016) {
      sat2016list.push(element)
    }
    if (element.year === 2017) {
      sat2017list.push(element)
    }

  });

  // console.log(sat2015list)
  // console.log(sat2016list)
  // console.log(sat2017list)

  var safety_day_mapped2015 = sat2015list.map(sat2015list => sat2015list.safety_day);
  var safety_day_mapped2016 = sat2016list.map(sat2016list => sat2016list.safety_day);
  var safety_day_mapped2017 = sat2017list.map(sat2017list => sat2017list.safety_day);

  var safety_night_mapped2015 = sat2015list.map(sat2015list => sat2015list.safety_night);
  var safety_night_mapped2016 = sat2016list.map(sat2016list => sat2016list.safety_night);
  var safety_night_mapped2017 = sat2017list.map(sat2017list => sat2017list.safety_night);

  
  var safety_parks_mapped2015 = sat2015list.map(sat2015list => sat2015list.safety_parks);
  var safety_parks_mapped2016 = sat2016list.map(sat2016list => sat2016list.safety_parks);
  var safety_parks_mapped2017 = sat2017list.map(sat2017list => sat2017list.safety_parks);

  // console.log(safety_day_mapped2015);
  // console.log(safety_night_mapped);
  // console.log(safety_parks_mapped);

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
    // console.log(wordFrequency);
    var agree = wordFrequency.Agree;
    var str_agree = wordFrequency["Strongly Agree"];
    var str_disagree = wordFrequency["Strongly Disagree"];
    var neutral = wordFrequency.Neutral;
    var disagree = wordFrequency.Disagree;
    var total = agree + neutral + disagree + str_agree + str_disagree;
    var total_sat = agree +str_agree;
    // console.log (total);

    var total_sat_percent = (total_sat / total)*100

    // console.log(total_sat_percent);
    return total_sat_percent;
  }
  wordCount(safety_day_mapped2015)
  var safety_day2015 = wordCount(safety_day_mapped2015);
  wordCount(safety_day_mapped2016);
  var safety_day2016 = wordCount(safety_day_mapped2016);
  wordCount(safety_day_mapped2017);
  var safety_day2017 = wordCount(safety_day_mapped2017);

  wordCount(safety_night_mapped2015);
  var safety_night2015 = wordCount(safety_night_mapped2015);
  wordCount(safety_night_mapped2016);
  var safety_night2016 = wordCount(safety_night_mapped2016);
  wordCount(safety_night_mapped2017);
  var safety_night2017 = wordCount(safety_night_mapped2017);

  wordCount(safety_parks_mapped2015);
  var safety_parks2015 = wordCount(safety_parks_mapped2015);
  wordCount(safety_parks_mapped2016);
  var safety_parks2016 = wordCount(safety_parks_mapped2016);
  wordCount(safety_parks_mapped2017);
  var safety_parks2017 = wordCount(safety_parks_mapped2017);

  // console.log(safety_day2016)

  // SAFETY LINE CHART

  var safety_day_line = {
    x: [2015, 2016, 2017],
    y: [safety_day2015, safety_day2016, safety_day2017],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Day Safety'
  };

  var safety_night_line = {
    x: [2015, 2016, 2017],
    y: [safety_night2015, safety_night2016, safety_night2017],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Night Safety'
  };

  var safety_parks_line = {
    x: [2015, 2016, 2017],
    y: [safety_parks2015, safety_parks2016, safety_parks2017],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Park Safety'
  };

  var safety_data = [safety_day_line, safety_night_line, safety_parks_line];
  var layout = {
    title: 'Percent of Residents who Feel Safe by Year',
    xaxis: {
      title: 'Year',
      nticks: (3)
      // showgrid: false,
      // zeroline: false
    },
    yaxis: {
      title: 'Percent Satisfied',
      range: [50, 100],
      // showline: false
    }
  };
  var satgraph = document.getElementById('sample-safetydata')

  Plotly.newPlot(satgraph, safety_data, layout);
});
}
  
function buildAnimalCharts(animal) {
    // @TODO: Use `d3.json` to fetch the sample data for the plots
  d3.json(`/aacdata`).then(function(response){
      // @TODO: Build a Bubble Chart using the sample data
    animalData = response;
    // console.log(animalData);

    var aac2015list = [];
    var aac2016list = [];
    var aac2017list = [];

    animalData.forEach(element => {
    if (element.year === 2015){
      aac2015list.push(element)
    }
    if (element.year === 2016) {
      aac2016list.push(element)
    }
    if (element.year === 2017) {
      aac2017list.push(element)
    }
    });
  // console.log(aac2015list)
  // console.log(aac2016list)
  // console.log(aac2017list)

    var aac2015dog = [];
    var aac2015cat = [];
    var aac2016dog = [];
    var aac2016cat = [];    
    var aac2017dog = [];
    var aac2017cat = [];

    aac2015list.forEach(element => {
    if (element.animal_type === "Dog"){
      aac2015dog.push(element)
    }
    if (element.animal_type === "Cat") {
      aac2015cat.push(element)
    }
    });
    // console.log(aac2015dog);
    // console.log(aac2015cat);

    aac2016list.forEach(element => {
    if (element.animal_type === "Dog"){
      aac2016dog.push(element)
    }
    if (element.animal_type === "Cat") {
      aac2016cat.push(element)
    }
    });
      // console.log(aac2016dog);
      // console.log(aac2016cat);

    aac2017list.forEach(element => {
    if (element.animal_type === "Dog"){
      aac2017dog.push(element)
    }
    if (element.animal_type === "Cat") {
      aac2017cat.push(element)
    }
    });
    // console.log(aac2017dog);
    // console.log(aac2017cat);

    var dog2015 = aac2015dog.map(aac2015dog => aac2015dog.outcome_type);
    var cat2015 = aac2015cat.map(aac2015cat => aac2015cat.outcome_type);
    var dog2016 = aac2016dog.map(aac2016dog => aac2016dog.outcome_type);
    var cat2015 = aac2016cat.map(aac2016cat => aac2016cat.outcome_type);
    var dog2017 = aac2017dog.map(aac2017dog => aac2017dog.outcome_type);
    var cat2015 = aac2017cat.map(aac2017cat => aac2017cat.outcome_type);

    console.log(dog2015);

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
        var adoption = wordFrequency.Adoption;
        var rto = wordFrequency["Return to Owner"];
        console.log(rto)
        var transfer = wordFrequency.Transfer;
        var died = wordFrequency.Died;
        var euthanasia = wordFrequency.Euthanasia;
        var missing = wordFrequency.Missing;

        var total = adoption + rto + transfer + died + euthanasia + missing;
        console.log(total)
        var adoptionrto = adoption + rto;
        console.log(adoptionrto);
        var adoptionrtopct = adoptionrto / total * 100;
        console.log(adoptionrtopct);
        return adoptionrtopct;
    }
    wordCount(dog2015);

    var dog_2015 = wordCount(dog2015);

    console.log(dog_2015)
    
// ANIMAL OUTCOME LINE CHART

  var dog = {
  x: [2015, 2016, 2017],
  y: [dog_2015, 50, 80],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Dog'
  };

// var cat = {
// x: [2015, 2016, 2017],
// y: [],
// type: 'scatter',
// name: 'Cat'
// };

// var livestock = {
// x: [2015, 2016, 2017],
// y: [],
// type: 'scatter',
// name: 'Livestock'
// };

// var bird = {
// x: [2015, 2016, 2017],
// y: [],
// type: 'scatter',
// name: 'Bird'
// };

// var animal_outcome_data = [dog, cat, livestock, bird];
  var animal_outcome_data = [dog];

  var layout = {
  title: 'Percent of Animals Adopted and Returned to Owner',
  xaxis: {
    title: 'Year',
    nticks: (3)

    // showgrid: false,
    // zeroline: false
  },
  yaxis: {
    title: 'Percent Adopted and Returned to Owner',
    range: [0, 100],
    // showline: false
  }
  };

  Plotly.newPlot('sample-animaldata', animal_outcome_data, layout);
});
}

function init() {
  buildSatCharts();
  buildAnimalCharts();
};
// Initialize the dashboard
init();
