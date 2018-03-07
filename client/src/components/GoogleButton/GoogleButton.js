import React from "react";
import "bulma/css/bulma.css";
//importing the react bulma components
import Button from "react-bulma-components/lib/components/button";
import Section from "react-bulma-components/lib/components/section";
import Box from "react-bulma-components/lib/components/box";

const GoogleButton = () => (
// <span className= "googleButton">
<div className="google has-text-centered">
<Section>
    <Box>
        <Button color="light">
        Google Sign-in
        </Button>
    </Box>
</Section>
</div>
)

export default GoogleButton;

