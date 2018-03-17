import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./TopBar.css";
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { Link } from "react-router-dom";
import Fonts from "../../../node_modules/google-fonts";

const TopBar = props =>

<div>
    <Section>
            <div className="searchBar">
              <Link to={"/NewActivity"}>
                <Button style={{marginTop: "60px"}}>
                    +
                </Button>
              </Link>

                {/* <Field>
                    <Control>
                        <Input placeholder="Search" className="search"/>
                    </Control>
                </Field> */}
            </div>
    </Section>
</div>

export default TopBar;


