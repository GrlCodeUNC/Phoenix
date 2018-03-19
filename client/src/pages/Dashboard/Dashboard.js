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
import Word from '../../components/PhoenixWord';
// import './Dashboard.css';




class Dashboard extends Component {
  state = {
    user: "",
    activities: [],
    timeLineDates: [],
    hoverState: false,
    activeTimelineDate: 0
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
        let currentIndex = 0;
        const currentDate = moment();
            
        res.data.forEach((activity) => {
          
          const dateFormatted = moment(activity.completeDate);

          console.log(`currentDate = ${currentDate}`);
          console.log(`dateFormatted = ${dateFormatted}`);

          console.log(dateFormatted.isAfter(currentDate, 'day'));

          if (!dateFormatted.isAfter(currentDate, 'day')) {
            currentIndex++;
          }
        
          newTimeArray.push(activity.completeDate);
        });

        console.log(`currentIndex = ${currentIndex}`);
        
        this.setState({ activities: res.data, timeLineDates: newTimeArray, activeTimelineDate: currentIndex -1});
       
      })
      .catch(err => console.log(err));
  }

  
  showDetailsHover = (plans) => {

    this.setState({ hoverState: true });

  }

  checkDates = (activity) => {

    // console.log("checkDate running");
    const dateFormatted = moment(activity.completeDate);
    const currentDate = moment();
    const timeframeDate = moment().add(14, "days");

    if (dateFormatted <= currentDate) {
      
      return (<ActivityCard overdue={true} hoverClass={this.state.hoverState} onMouseOver={this.showDetailsHover} removeActivity={this.removeActivity} key={activity._id} id={activity._id} {...activity}/>)

    } else {

      if (dateFormatted > currentDate && dateFormatted <= timeframeDate ) {

        return (<ActivityCard getItDone={true} hoverClass={this.state.hoverState} onMouseOver={this.showDetailsHover} removeActivity={this.removeActivity} key={activity._id} {...activity}/>)
      } else {

        return (<ActivityCard stillTime={true} hoverClass={this.state.hoverState} onMouseOver={this.showDetailsHover} removeActivity={this.removeActivity} id={activity._id} key={activity._id} {...activity}/>)
      }
    }


  }


  removeActivity = (id) => {

    API.deleteActivity(id)
      .then(res => {

        // console.log('res ', res);

        this.loadActivities();

      })
      .catch(err => console.log(err));

  }

  render() {
    console.log('this state ', this.state)
    return (
      <div>
      <Word location='dashboard'/>
      <div className="container" style={{minHeight:"100%"}}>
      
        
        <Columns breakpoint="mobile">
          
            <Column className="is-one-quarter" style={{backgroundColor: "#aeaeae8c"}}>
            {/* adding breaks because nothing else is working!! */}
            <br/>
              <UserPhoto/>
              <UserName/>
              <TopBar/> 
            </Column>
        
          <Column className="auto">
              <br/>
              {this.state.timeLineDates.length ? 
                  <TimeLine dates={this.state.timeLineDates} activities={this.state.activities} indexDefault={this.state.activeTimelineDate}/>
                :
                  <h3 style={{textAlign:"center"}}>Add new activities to start your Phoenix collection</h3>
              }
              <br/>
              <br/>

            {this.state.activities.length ?
              this.state.activities.map((activity) => {
              // console.log(activity)
              return this.checkDates(activity)
              })
            :
              <Column>
                <h1 style={{textAlign: "center"}}>No Activities to Display</h1>
              </Column>
            }
          </Column>
        </Columns>  
        
      </div>
      </div>

    );
  }
}

export default Dashboard;