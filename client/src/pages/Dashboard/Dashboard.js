import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import ActivityCard from '../../components/ActivityCard';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';

class Dashboard extends Component {

render() {
    return (
      <div className="App">
      <div className="container">
        <Columns>
          <Column>
            <p className="">
              <ActivityCard/>
            </p>
          </Column>
          <Column>
            <p className="">
              <ActivityCard/>
            </p>
          </Column>
          <Column>
            <p className="">
              <ActivityCard/>
            </p>
          </Column>
          <Column>
            <p className="">
              <ActivityCard/>
            </p>
          </Column>
        </Columns>
      </div>
      </div>
    );
  }
}

export default Dashboard;