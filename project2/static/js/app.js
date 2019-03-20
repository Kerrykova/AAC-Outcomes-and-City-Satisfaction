
var satisfactionData;
var animalData;

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

  var safety_day_mapped2015 = sat2015list.map(sat2015list => sat2015list.safety_day);
  var safety_day_mapped2016 = sat2016list.map(sat2016list => sat2016list.safety_day);
  var safety_day_mapped2017 = sat2017list.map(sat2017list => sat2017list.safety_day);

  var safety_night_mapped2015 = sat2015list.map(sat2015list => sat2015list.safety_night);
  var safety_night_mapped2016 = sat2016list.map(sat2016list => sat2016list.safety_night);
  var safety_night_mapped2017 = sat2017list.map(sat2017list => sat2017list.safety_night);
  
  var safety_parks_mapped2015 = sat2015list.map(sat2015list => sat2015list.safety_parks);
  var safety_parks_mapped2016 = sat2016list.map(sat2016list => sat2016list.safety_parks);
  var safety_parks_mapped2017 = sat2017list.map(sat2017list => sat2017list.safety_parks);

  var animal_services_mapped2015 = sat2015list.map(sat2015list => sat2015list.animal_services);
  var animal_services_mapped2016 = sat2016list.map(sat2016list => sat2016list.animal_services);
  var animal_services_mapped2017 = sat2017list.map(sat2017list => sat2017list.animal_services);

  var qofl_mapped2015 = sat2015list.map(sat2015list => sat2015list.quality_of_life);
  var qofl_mapped2016 = sat2016list.map(sat2016list => sat2016list.quality_of_life);
  var qofl_mapped2017 = sat2017list.map(sat2017list => sat2017list.quality_of_life);

  // console.log (qofl_mapped2015)

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
    var agree = wordFrequency.Agree;
    var str_agree = wordFrequency["Strongly Agree"];
    var str_disagree = wordFrequency["Strongly Disagree"];
    var neutral = wordFrequency.Neutral;
    var disagree = wordFrequency.Disagree;
    var total = agree + neutral + disagree + str_agree + str_disagree;
    var total_sat = agree +str_agree;

    var total_sat_percent = (total_sat / total)*100

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

  function wordCountSat(data) {
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
      var dunno = wordFrequency["Don't Know"];
      var satisfied = wordFrequency.Satisfied;
      var vsat = wordFrequency["Very Satisfied"];
      var vdissat = wordFrequency["Very Dissatisfied"];
      var dissat = wordFrequency["Dissatisfied"]
      var neutral = wordFrequency.Neutral;
      var total = neutral + dunno + satisfied + vsat + vdissat + dissat;
      var total_sat = vsat + satisfied;
  
      var total_sat_percent = (total_sat / total)*100
      return total_sat_percent;
  }

  wordCountSat(animal_services_mapped2015);
  var animal_services2015 = wordCountSat(animal_services_mapped2015);
  wordCountSat(animal_services_mapped2016);
  var animal_services2016 = wordCountSat(animal_services_mapped2016);
  wordCountSat(animal_services_mapped2017);
  var animal_services2017 = wordCountSat(animal_services_mapped2017);

  wordCountSat(qofl_mapped2015);
  var qofl2015 = wordCountSat(qofl_mapped2015);
  wordCountSat(animal_services_mapped2016);
  var qofl2016 = wordCountSat(qofl_mapped2016);
  wordCountSat(qofl_mapped2015);
  var qofl2017 = wordCountSat(qofl_mapped2017);

  // console.log(animal_services_mapped2015)
  // console.log(animal_services2015)
  // console.log(qofl2015)

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

  var animal_services_line = {
    x: [2015, 2016, 2017],
    y: [animal_services2015, animal_services2016, animal_services2017],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Animal Services'
  };

  var qofl_line = {
    x: [2015, 2016, 2017],
    y: [qofl2015, qofl2016, qofl2017],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Quality of Life'
  };

  var safety_data = [safety_day_line, safety_night_line, safety_parks_line, animal_services_line, qofl_line];
  var layout = {
    width: 550,
    height: 400,
    title: 'Percentages of Satisfaction and Safety By Year',
    xaxis: {
      title: 'Year',
      nticks: (3)
      // showgrid: false,
      // zeroline: false
    },
    yaxis: {
      title: 'Percent Satisfied',
      range: [40, 100],
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
    var aac2015bird = [];
    var aac2015livestock = [];
    var aac2016dog = [];
    var aac2016cat = [];  
    var aac2016bird = [];
    var aac2016livestock = [];
    var aac2017dog = [];
    var aac2017cat = [];
    var aac2017bird = [];
    var aac2017livestock = [];


    aac2015list.forEach(element => {
    if (element.animal_type === "Dog"){
      aac2015dog.push(element)
    }
    if (element.animal_type === "Cat") {
      aac2015cat.push(element)
    }
    if (element.animal_type === "Bird") {
      aac2015bird.push(element)
    }
    if (element.animal_type === "Livestock") {
      aac2015livestock.push(element)
    }
    });
    console.log(aac2015bird);
    // console.log(aac2015cat);

    aac2016list.forEach(element => {
    if (element.animal_type === "Dog"){
      aac2016dog.push(element)
    }
    if (element.animal_type === "Cat") {
      aac2016cat.push(element)
    }
    if (element.animal_type === "Bird") {
      aac2016bird.push(element)
    }
    if (element.animal_type === "Livestock") {
      aac2016livestock.push(element)
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
    if (element.animal_type === "Bird") {
      aac2017bird.push(element)
    }
    if (element.animal_type === "Livestock") {
      aac2017livestock.push(element)
    }
    });
    // console.log(aac2017dog);
    // console.log(aac2017cat);

    var dog2015 = aac2015dog.map(aac2015dog => aac2015dog.outcome_type);
    var cat2015 = aac2015cat.map(aac2015cat => aac2015cat.outcome_type);
    var bird2015 = aac2015bird.map(aac2015bird => aac2015bird.outcome_type);
    var livestock2015 = aac2015livestock.map(aac2015livestock => aac2015bird.livestock);
    var dog2016 = aac2016dog.map(aac2016dog => aac2016dog.outcome_type);
    var cat2016 = aac2016cat.map(aac2016cat => aac2016cat.outcome_type);
    var bird2016 = aac2016bird.map(aac2016bird => aac2016bird.outcome_type);
    var livestock2016 = aac2016livestock.map(aac2016livestock => aac2016livestock.outcome_type);
    var dog2017 = aac2017dog.map(aac2017dog => aac2017dog.outcome_type);
    var cat2017 = aac2017cat.map(aac2017cat => aac2017cat.outcome_type);
    var bird2017 = aac2017bird.map(aac2017bird => aac2017bird.outcome_type);
    var livestock2017 = aac2017livestock.map(aac2017livestock => aac2017livestock.outcome_type);

    // console.log(dog2015);

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
        // console.log(rto)
        var transfer = wordFrequency.Transfer;
        var died = wordFrequency.Died;
        var euthanasia = wordFrequency.Euthanasia;
        var missing = wordFrequency.Missing;

        var total = adoption + rto + transfer + died + euthanasia + missing;
        var adoptionrto = adoption + rto;
        var adoptionrtopct = adoptionrto / total * 100;
        return adoptionrtopct;
    }
    wordCount(dog2015);
    var dog_2015 = wordCount(dog2015);
    wordCount(dog2016);
    var dog_2016 = wordCount(dog2016);
    wordCount(dog2017);
    var dog_2017 = wordCount(dog2017);

    wordCount(cat2015);
    var cat_2015 = wordCount(cat2015);
    wordCount(cat2016);
    var cat_2016 = wordCount(cat2016);
    wordCount(cat2017);
    var cat_2017 = wordCount(cat2017);

    wordCount(bird2015);
    var bird_2015 = wordCount(bird2015);
    wordCount(bird2016);
    var bird_2016 = wordCount(bird2016);
    wordCount(bird2017);
    var bird_2017 = wordCount(bird2017);

    wordCount(livestock2015);
    var livestock_2015 = wordCount(livestock2015);
    wordCount(livestock2016);
    var livestock_2016 = wordCount(livestock2016);
    wordCount(livestock2017);
    var livestock_2017 = wordCount(livestock2017);

    console.log(dog_2015)
    
// ANIMAL OUTCOME LINE CHART

  var dog = {
  x: [2015, 2016, 2017],
  y: [dog_2015, dog_2016, dog_2017],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Dog'
  };

  var cat = {
  x: [2015, 2016, 2017],
  y: [cat_2015, cat_2016, cat_2017],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Cat'
  };

  var livestock = {
  x: [2015, 2016, 2017],
  y: [livestock_2015, livestock_2016, livestock_2017],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Livestock'
  };

  var bird = {
  x: [2015, 2016, 2017],
  y: [bird_2015, bird_2016, bird_2017],
  type: 'scatter',
  mode: 'lines+markers',
  name: 'Bird'
  };

  var animal_outcome_data = [dog, cat, livestock, bird];

  var layout = {
  width: 550,
  height: 400,
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

// PIE CHART
function buildPieCharts(animal) {
  // @TODO: Use `d3.json` to fetch the sample data for the plots
d3.json(`/aacdata`).then(function(response){
  animalData = response;

  var aacDog = [];
  var aacCat = [];
  var aacOther = [];
  // var aacLS = [];
  var aacBird = [];

  var aacAdopted = [];
  var aacDied = [];
  var aacReturnedToOwner = [];
  var aacTransferred = [];
  // var aacOtherOutcome = [];

  animalData.forEach(element => {
    if (element.animal_type === "Dog"){
      aacDog.push(element)
    }
    if (element.animal_type === "Cat") {
      aacCat.push(element)
    }
    if (element.animal_type === "Other") {
      aacOther.push(element)
    }
    if (element.animal_type === "Bird") {
      aacBird.push(element)
    }
    if (element.outcome_type === "Adoption") {
      aacAdopted.push(element)
    }
    if (element.outcome_type === "Died") {
      aacDied.push(element)
    }
    if (element.outcome_type === "Euthanasia") {
      aacDied.push(element)
    }
    if (element.outcome_type === "Relocate") {
      aacTransferred.push(element)
    }
    if (element.outcome_type === "Transfer") {
      aacTransferred.push(element)
    }    
    if (element.outcome_type === "Return to Owner") {
      aacReturnedToOwner.push(element)
    }


    });

  // });

  var dogcount = aacDog.map(aacDog => aacDog.animal_type);
  var catcount = aacCat.map(aacCat => aacCat.animal_type);
  var birdcount = aacBird.map(aacBird => aacBird.animal_type);
  // var lscount = aacLS.map(aacLS => aacLS.animal_type);
  var othercount = aacOther.map(aacOther => aacOther.animal_type);

  var adoptedcount = aacAdopted.map(aacAdopted => aacAdopted.outcome_type);
  var diedcount = aacDied.map(aacDied => aacDied.outcome_type);
  var rtocount = aacReturnedToOwner.map(aacReturnedToOwner => aacReturnedToOwner.outcome_type);
  var transfercount = aacTransferred.map(aacTransferred => aacTransferred.outcome_type);

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
        return wordFrequency.Dog;
    };
    wordCount(dogcount)
    dogcounted = wordCount(dogcount);

  function catwordCount(data) {
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
        return wordFrequency.Cat;
    };
    catwordCount(catcount)
    catcounted = catwordCount(catcount);

    function birdwordCount(data) {
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
          return wordFrequency.Bird;
      };

    birdwordCount(birdcount)
    birdcounted = birdwordCount(birdcount);

    function otherwordCount(data) {
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
          return wordFrequency.Other;
      };
    otherwordCount(othercount)
    othercounted = otherwordCount(othercount);







    // Count the number of each outcome type
    function adoptedwordCount(data) {
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
          return wordFrequency.Adoption;
      };
    adoptedwordCount(adoptedcount)
    adopted = adoptedwordCount(adoptedcount);

    function diedwordCount(data) {
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
          return wordFrequency.Died;
      };
    diedwordCount(diedcount)
    died = diedwordCount(diedcount);

    function rtowordCount(data) {
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
          return wordFrequency["Return to Owner"];
      };
    rtowordCount(rtocount)
    returnToOwner= rtowordCount(rtocount);

    function transferwordCount(data) {
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
          return wordFrequency.Transfer;
      };
    transferwordCount(transfercount)
    transfer = transferwordCount(transfercount);

    // function otherwordCount(data) {
    //   //   // An object to hold word frequency
    //     var wordFrequency = {};
    //   //   // Iterate through the array
    //     for (var i = 0; i < data.length; i++) {
    //       var currentWord = data[i];
    //       // If the word has been seen before...
    //       if (currentWord in wordFrequency) {
    //   //       // Add one to the counter
    //         wordFrequency[currentWord] += 1;
    //       }
    //       else {
    //         // Set the counter at 1
    //         wordFrequency[currentWord] = 1;
    //       }
    //       }
    //       return wordFrequency.OtherOutcome;
    //   };
    // otherwordCount(othercount)
    // other = otherwordCount(othercount);






    function drawTypeChart() {
      var myConfig = {
        "type":"pie",
        "title":{
          "text":"Animal Types"
        },
        "plot":{
              "value-box":{
                "text": '%t',
                "placement":"out",
                "font-size":10,},
              "animation":{
                 "on-legend-toggle": true, //set to true to show animation and false to turn off
                 "effect": 5,
                 "method": 1,
                 "sequence": 1,
                 "speed": 1
              },
              "tooltip":{
                  "text":"%t: %v (%npv%)",
                  "font-color":"black",
                  "font-family":"Helvetica",
                  "text-alpha":1,
                  "background-color":"white",
                  "alpha":0.8,
                  "border-width":1,
                  "border-color":"#fcfcfc",
                  "border-radius":"10px",
                  "padding":"10%",
                  "placement":"node:center"
        }},      
        "series":[
          {"values":[dogcounted],
           "background-color":"#e52222",
           "text": "Dog"},
          {"values":[catcounted],
           "background-color":"#e05050",
           "text": "Cat"},
          {"values":[birdcounted],
           "background-color":"#ea8383",
           "text": "Bird"},
          {"values":[othercounted],
           "background-color":"#efacac",
           "text": "Other"},
          // {"values":[lscounted]}
        ]
      };
      
      zingchart.render({ 
        id : 'pie', 
        data : myConfig, 
        height: 400, 
        width: "100%" 
      });
    };

    function drawOutcomeChart() {
      var myConfig = {
        "type":"pie",
        "title":{
          "text":"Animal Outcomes"
        },
        "plot":{
                "value-box":{
                    "text": '%t',
                    "placement":"out",
                    "font-size":10,},
                "animation":{
                  "on-legend-toggle": true, //set to true to show animation and false to turn off
                  "effect": 5,
                  "method": 1,
                  "sequence": 1,
                  "speed": 1
                },
                "tooltip":{
                    "text":"%t: %v (%npv%)",
                    "font-color":"black",
                    "font-family":"Helvetica",
                    "text-alpha":1,
                    "background-color":"white",
                    "alpha":0.8,
                    "border-width":1,
                    "border-color":"#fcfcfc",
                    "border-radius":"10px",
                    "padding":"10%",
                    "placement":"node:center"
          }},   
        "series":[
          {"values":[adopted],
          "background-color":"#e52222",
          "text": "Adopted"},
          {"values":[died],
          "background-color":"#e05050",
          "text": "Died"},
          {"values":[returnToOwner],
          "background-color":"#ea8383",
          "text": "RTO"},
          {"values":[transfer],
          "background-color":"#efacac",
          "text": "Transferred"}
        ]
      };
      
      zingchart.render({ 
        id : 'pie', 
        data : myConfig, 
        height: 400, 
        width: "100%" 
      });
    };

  var typeButton = d3.select(".type");
  var ageButton = d3.select(".ageOutcome");

  // on the typeButton being clicked, do this
  typeButton.on("click", function() {
    // Change pie chart to animal types
    drawTypeChart();
  });

  // on the ageButton being clicked, do this
  ageButton.on("click", function() {
    // Change pie chart to age upon outcomes
    drawOutcomeChart();
  });
  drawTypeChart();
  });
  }

function init() {
  buildSatCharts();
  buildAnimalCharts();
  buildPieCharts();
  // drawTypeChart();
};
// Initialize the dashboard
init();
