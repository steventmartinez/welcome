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


    /* define welcome message trial */
    var welcome = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: "Welcome to the experiment. Press any key to begin."
      };
      timeline.push(welcome);


  		/* finish connection with pavlovia.org */
          var pavlovia_finish = {
			type: jsPsychPavlovia,
			command: "finish",
			participantId: "JSPSYCH-DEMO"
		};
		timeline.push(pavlovia_finish);
