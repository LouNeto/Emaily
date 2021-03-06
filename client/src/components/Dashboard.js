import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div className="container">
      <SurveyList />
      <div className="fixed-action-btn add-survey">
        <Link to="/surveys/new" className="btn-floating btn-large red darken-3">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
