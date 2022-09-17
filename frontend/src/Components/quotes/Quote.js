import React, { Fragment } from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';


const Quote = ({author,text}) => {
    return (
        <Fragment>
            <ListItem alignItems="flex-start">
            <ListItemText
            primary= {author}
            secondary={
                <React.Fragment>
                {text}
                </React.Fragment>
            }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
     </Fragment>
    )
}

export default Quote;


