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

<Card key={activity.id}>
{props.results.map(result =>
    <div>
    <Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
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
                    John Smith
                </Heading>
                <Heading subtitle size={6}>
                    @johnsmith
                </Heading>
            </MediaItem>
        </Media>
        <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a>@bulmaio</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </Content>
    </Card.Content>
    </div>
    )}
</Card>



export default ActivityCard;