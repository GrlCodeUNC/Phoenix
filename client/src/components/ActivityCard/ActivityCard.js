import React, { Component } from "react";
import 'bulma/css/bulma.css';
import './ActivityCard.css';
//importing the react bulma components
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import MediaItem from 'react-bulma-components/lib/components/media/components/media-item';
import Image from 'react-bulma-components/lib/components/image';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import Column from 'react-bulma-components/lib/components/columns/components/column';

const ActivityCard = props =>

  
    <Card className="loadActivities">
        <Card.Image size="4by3" src= {props.photo} />
            <Card.Content>
                <Content>
                 {props.plans}
                    <br />
                    <time>{props.createDate}</time>
                </Content>
            </Card.Content>
    </Card>
    



export default ActivityCard;