import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import ActivityCard from '../../components/ActivityCard';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';
import API from '../../utils/API';
import TopBar from '../../components/TopBar';



class Dashboard extends Component {
  state = {
    user: "",
    activities: []
  }


  componentDidMount() {
    this.loadActivities();
  }

  loadActivities = () => {
    API.getAllActivities(this.state.user)
      .then(res => {
        console.log('res ', res)
        this.setState({ activities: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('this state ', this.state)
    return (
      
      // <div className="App">
      // <div className="container">
      //   <Columns>
      //     <Column>
      //         <ActivityCard/>
      //     </Column>
      //     <Column>
      //         <ActivityCard/>
      //     </Column>
      //     <Column>
      //         <ActivityCard/>
      //     </Column>
      //     <Column>
      //         <ActivityCard/>
      //     </Column>
      //   </Columns>
      // </div>
      // </div>

      <div className="App">
        <div className="container">
        <TopBar/> 
          <Columns>
            {this.state.activities.length ? 
            <div>
                {this.state.activities.map((activity) => {
                  console.log(activity)
                  return <ActivityCard key={activity.id} {...activity}/> 
                })}
            </div>
             :
                <h3>No Activities to Display</h3>
              }
          </Columns>
        </div>
      </div>

    );
  }
}

export default Dashboard;