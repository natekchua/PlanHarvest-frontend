import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/Home';

import {Link} from "react-router-dom";


function LinkListItem({children, to}){
    return (
        <Link to={to}>
            <ListItem button>{children}</ListItem>
        </Link>
    )
}

export const mainListItems = (
    <div>
        <LinkListItem to="home">
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </LinkListItem>
        <LinkListItem to="farmer-inventory">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </LinkListItem>
        <LinkListItem to="farmer-contracts">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Contracts" />
        </LinkListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Assets" />
        </ListItem>
    </div>
);