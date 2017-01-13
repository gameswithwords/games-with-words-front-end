/* eslint-disable max-len */

import React, { PropTypes } from 'react';
export default class Test extends React.Component {

  componentDidMount() {
    // defining groups of questions that will go together.
    var page_1_questions = ["I like vegetables.", "I like fruit."];

    // definiting two different response scales that can be used.
    var page_1_options = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
    var page_2_options = ["Strongly Disagree", "Disagree", "Somewhat Disagree", "Neural", "Somewhat Agree", "Agree", "Strongly Agree"];

    var multi_choice_block = {
        type: 'survey-multi-choice',
        questions: page_1_questions,
        options: [page_1_options, page_2_options],  // need one scale for every question on a page
        required: [true, false],
        on_finish: function(data) {
          console.log("i'm data!", data)
        },   // set whether questions are required
    };

    var multi_choice_block_horizontal = {
        type: 'survey-multi-choice',
        questions: page_1_questions,
        options: [page_1_options, page_2_options],  // need one scale for every question on a page
        required: [true, false],   // set whether questions are required
        horizontal: true,  // centres questions and makes options display horizontally
        on_finish: function(data) {
          console.log("i'm data!", data)
        }
    };

    jsPsych.init({
      display_element: this.refs.main,
      timeline: [multi_choice_block],
      on_finish: function() {
        //go to the next question
      }
    });
  }
  render() {
    return (
      <div ref="main">
      </div>
    );
  }
}
