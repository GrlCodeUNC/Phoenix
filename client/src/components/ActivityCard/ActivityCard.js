import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './ActivityCard.css';
import moment from "moment";
import Card from 'react-bulma-components/lib/components/card';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Masonry from 'react-masonry-component';


const ActivityCard = props => {
    
    return (

  <Card className="loadActivities" onMouseOver={() => props.onMouseOver(props.plans)}>
    <Card.Header>
        {props.overdue &&
            <Card.Header.Title className="overdue">
                {props.title}<span onClick={() => props.removeActivity(props._id)} className="delete deleteRightAlign"></span>
            </Card.Header.Title>
        }
        {props.getItDone &&
            <Card.Header.Title className="getItDone">
                {props.title}<span onClick={() => props.removeActivity(props._id)} className="delete deleteRightAlign"></span>
            </Card.Header.Title>
        }
        {props.stillTime &&
            <Card.Header.Title>
                {props.title}<span onClick={() => props.removeActivity(props._id)} className="delete deleteRightAlign"></span>
            </Card.Header.Title>
        }
    </Card.Header>
  
    <Card.Image size="3by2" src={props.photo} />
    <Card.Content className="cardDetails">
      <Content>
        <div className="timeInfo">
          <time>Get it Done: {moment(props.completeDate).format('MMMM Do YYYY')}</time>
        </div>
        {props.hoverClass && 
            <div className="overlay">
                <div className="text">{props.plans}</div>
            </div>
        }
      </Content>
    </Card.Content>
  </Card>
 
 
)};

export default ActivityCard;