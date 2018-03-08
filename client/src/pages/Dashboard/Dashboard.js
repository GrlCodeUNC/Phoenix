import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import ActivityCard from '../../components/ActivityCard';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';
import API from '../../utils/API';



class Dashboard extends Component {
  state = {
    search: "",
    results: [] 
  };
 

  componentDidMount() {
  this.loadActivity();
}
  
loadactivities = () => {
  API.getActivity()
  .then(res =>
      this.setState({results: res.data.data })
  )
  .catch(err => console.log(err));
};

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
                <ActivityCard/> 
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