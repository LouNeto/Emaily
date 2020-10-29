import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  calculatePollPercentage = ({ yes, no }) => {
    if (yes === 0) {
      return 0;
    }
    return (yes / (yes + no)) * 100;
  };

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      const percentage = this.calculatePollPercentage(survey);
      return (
        <div className="card darken-1" key={survey.id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            {/* <div id="option-1" className="option">
              <div className="results">
                <div className="on" style={{ width: `${percentage}%` }}></div>
              </div>
            </div> */}
            <a style={{ color: '#2c8b34' }}>Yes: {survey.yes}</a>

            {/* <div id="option-1" className="option">
              <div className="results">
                <div
                  className="on no"
                  style={{ width: `${percentage}%`, marginTop: '5px' }}
                ></div>
              </div>
            </div> */}
            <a style={{ color: 'rgba(238, 57, 57, 0.5)' }}>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
