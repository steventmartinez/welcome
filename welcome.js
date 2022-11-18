    /* initialize jsPsych */
    var jsPsych = initJsPsych({
        on_finish: function () {
          jsPsych.data.displayData();
        }
      });
  

//Create timeline
var timeline = [];


    /* init connection with pavlovia.org */
    var pavlovia_init = {
        type: jsPsychPavlovia,
        command: "init"
    };
    timeline.push(pavlovia_init);


///Welcome message and PID entry
var welcome = {
    type: jsPsychSurveyText,
    questions: [{prompt: "<p><div style ='font-size:50px;'>Welcome to the experiment!</div></p>" +
    "<p><div style ='font-size:50px;'>Please enter your participant ID.</div></p>", name: 'PID', required: true}],
    on_finish: function(data) {
    // when this trial ends, check the data
    //console.log('response: ', data.response);
    var response = data.response;
    console.log(response)
    console.log(response.PID)
    //console.log(response.PID)
    id = Number(Object.values(response))
    console.log(id)
    jsPsych.data.addProperties({
        PID: response.PID, 
    })
    PID_condition = id % 3
    console.log(PID_condition)
  },
  }


  timeline.push(welcome);



  		/* finish connection with pavlovia.org */
          var pavlovia_finish = {
			type: jsPsychPavlovia,
			command: "finish",
			participantId: "JSPSYCH-DEMO"
		};
		timeline.push(pavlovia_finish);
