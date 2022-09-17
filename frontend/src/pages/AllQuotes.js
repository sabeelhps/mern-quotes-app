import React,{useEffect} from 'react'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api';
import QuotesList from '../Components/quotes/QuotesList';

const AllQuotes = () => {

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true); 
    console.log(loadedQuotes);
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);


    if (status === 'pending') {
        return <p>Loading ........</p>
    }

    if (error) {
        return <p>{ error }</p>
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <p>No Quotes found</p>
    }

    return (
        <div>
            <QuotesList quotes={loadedQuotes}/>
        </div>
    )
}

export default AllQuotes
