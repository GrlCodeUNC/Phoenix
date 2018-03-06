import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import ActivityCard from '../../components/ActivityCard';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';



class Dashboard extends Component {
  state = {activites: [] }
 

  // componentDidMount() {
//   this.loadActivites();
// }
  

// loadactivities = () => {
//   API.getActivities()
//   .then(res =>
//       this.setState({activites: res.data, title:"", photo:"", plans: "", user:"" })
//   )
//   .catch(err => console.log(err));
// };

render() {
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
        <Columns> 
          {this.state.activites.length ? (
            <Column>
              {this.state.activites.map(activites => (
                <ActivityCard/> 
              ))}
            </Column>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Columns>
      </div>
      </div>

    );
  }
}

export default Dashboard;