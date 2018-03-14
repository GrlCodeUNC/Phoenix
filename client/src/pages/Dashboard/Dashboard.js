import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import ActivityCard from '../../components/ActivityCard';
import Wrapper from '../../components/Wrapper';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';
import API from '../../utils/API';
import TopBar from '../../components/TopBar';
import TimeLine from '../../components/TimeLine';
import UserPhoto from '../../components/UserPhoto';
import moment from "moment";

// this is the start of an idea for getting the cards to show up in their own column
// const displayActivites = ({activity}) => (
//   <div>
//     <Columns>
//       <Column>{activity}</Column>
//       <Column>{activity}</Column>
//       <Column>{activity}</Column>
//     </Columns>
//   </div>
// );

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

      // <div className="App">
        <div className="container">
        <TopBar/> 
       
        {/* <Wrapper>
          <Columns>
          <Column className="size-4">      
              {this.state.activities.map (activity => (
                <ActivityCard key={activity.id} {...activity}/>
              ) )}           
          </Column>
          </Columns>
        </Wrapper>
         */}


            <Columns breakpoint="mobile">
              <Column className="is-one-quarter">
                <UserPhoto/>
              </Column>
              <Column className="auto">
                <TimeLine dates={this.state.timeLineDates} />
                {this.state.activities.length ?
                      this.state.activities.map((activity) => {
                      console.log(activity)
                      return <ActivityCard key={activity.id} {...activity}/> 
                      })
               :
                  <Column>
                    <h3>No Activities to Display</h3>
                  </Column>
                  }
                </Column>
            </Columns>  
         
        </div>
      // </div>

    );
  }
}

export default Dashboard;