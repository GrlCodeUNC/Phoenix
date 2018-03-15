import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './ActivityCard.css';
import moment from "moment";
//importing the react bulma components
import Card from 'react-bulma-components/lib/components/card';
// import Media from 'react-bulma-components/lib/components/media';
// import MediaItem from 'react-bulma-components/lib/components/media/components/media-item';
import Image from 'react-bulma-components/lib/components/image';
// import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
// import Columns from 'react-bulma-components/lib/components/columns';
// import Column from 'react-bulma-components/lib/components/columns/components/column';

const ActivityCard = props => (
  <Card className="loadActivities">
    <Card.Header>
        <Card.Header.Title>
            {props.title}<span onClick={() => props.removeActivity(props._id)} className="delete deleteRightAlign"></span>
        </Card.Header.Title>
    </Card.Header>
  
    <Card.Image size="3by2" src={props.photo} />
    <Card.Content className="cardDetails">
      <Content>
        {/* {props.plans}
        <br /> */}
        <time>Get it Done: {moment(props.completeDate).format('MMMM Do YYYY')}</time>
      </Content>
    </Card.Content>
  </Card>
);
    
export default ActivityCard;