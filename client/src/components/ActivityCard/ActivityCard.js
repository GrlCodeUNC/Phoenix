import React, { Component } from "react";
import 'bulma/css/bulma.css';
//importing the react bulma components
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import MediaItem from 'react-bulma-components/lib/components/media/components/media-item';
import Image from 'react-bulma-components/lib/components/image';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';

const ActivityCard = props =>

<Card>
    <Card.Image size="4by3" src= {props.photo} />
    <Card.Content>
        <Media>
            <MediaItem renderAs="figure" position="left">
                <Image
                    renderAs="p"
                    size={64}
                    alt="64x64"
                    src="http://bulma.io/images/placeholders/128x128.png"
                />
            </MediaItem>
            <MediaItem>
                <Heading size={4}>
                    {props.user}
                </Heading>
                <Heading subtitle size={6}>
                    @username
                </Heading>
            </MediaItem>
        </Media>
        <Content>
            {props.plans}
            <a>@bulmaio</a>
            <br />
            <time>{props.createDate}</time>
        </Content>
    </Card.Content>
</Card>



export default ActivityCard;