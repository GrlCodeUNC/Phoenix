import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';

const TopBar = props =>

<div>
    <Section>
        <Box>
            <Container>
                <Button>
                    New Activity
                </Button>
            </Container>
        </Box>
    </Section>
</div>

export default TopBar;


