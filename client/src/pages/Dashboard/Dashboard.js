import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import ActivityCard from '../../components/ActivityCard';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';
import API from '../../utils/API';
import TopBar from '../../components/TopBar';
import TimeLine from '../../components/TimeLine';
import UserPhoto from '../../components/UserPhoto';
import UserName from '../../components/UserName';
import moment from "moment";
import Section from 'react-bulma-components/lib/components/section';



class Dashboard extends Component {
  state = {
    user: "",
    activities: [],
    timeLineDates: []
  }

  componentDidMount() {
    
    this.loadActivities();
  }

  loadActivities = () => {

    const userEmail = localStorage.getItem("email");
    // const userEmail = "abreaw@hotmail.com"; // testing no activities returned
    
    
    API.getActivityEmail(userEmail)
      .then(res => {
        // console.log('res ', res);
        let newTimeArray = [];
        res.data.forEach((activity) => {
          newTimeArray.push(activity.completeDate);
        });
        // console.log(newTimeArray);
        this.setState({ activities: res.data, timeLineDates: newTimeArray });
      })
      .catch(err => console.log(err));
  }

  removeActivity = (id) => {

    console.log(`delete activity triggered ${id}`);

    API.deleteActivity(id)
      .then(res => {

        console.log('res ', res);

        this.loadActivities();
        // // Filter this.state.activities for activities with an id not equal to the id being removed
        // const activities = this.state.activities.filter(activity => activity._id !== id);
        // // Set this.state.activities equal to the new activities array
        // this.setState({ activities });
      })
      .catch(err => console.log(err));

  }

  render() {
    console.log('this state ', this.state)
    return (

 
       
  

      <div className="container">
        
        <Columns breakpoint="mobile">
          <Column className="is-one-quarter sideBar" >
            <UserPhoto/>
            <UserName />
            <TopBar/> 
         </Column>
          <Column className="auto">
              {this.state.timeLineDates.length ? 
                  <TimeLine dates={this.state.timeLineDates} activities={this.state.activities}/>
                :
                  <h3>Add new activities to start your Phoenix Life</h3>
              }
            {this.state.activities.length ?
              this.state.activities.map((activity) => {
              console.log(activity)
              return <ActivityCard removeActivity={this.removeActivity} key={activity._id} {...activity}/>
              })
            :
              <Column>
                <h3>No Activities to Display</h3>
              </Column>
            }
          </Column>
        </Columns>  
        
      </div>

    );
  }
}

export default Dashboard;