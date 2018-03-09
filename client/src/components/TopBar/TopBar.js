import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';

const TopBar = props =>

<div>
    <Section>
        <Container>
            <p className="bd-notification is-success">
                <Heading size={5} renderAs="p">
                This is where stuff will live
                </Heading>
            </p>
        </Container>
    </Section>
</div>

export default TopBar;


