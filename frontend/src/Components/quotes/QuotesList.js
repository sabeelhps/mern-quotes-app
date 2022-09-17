import React from 'react'
import List from '@mui/material/List';
import Quote from './Quote';

const QuotesList = ({quotes}) => {
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightgreen' }}>
            {
                quotes.map((quote,idx) => {
                    return <Quote author={quote.author} text={quote.text} key={ quote._id}/>
                })
            }
            </List>
        </div>
    )
}

export default QuotesList;
