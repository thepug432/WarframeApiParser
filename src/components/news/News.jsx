import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder'
import NewsData from '../NewsData'

export default function News(props) {
    if (props.data) {
        const [seeNews, changeSeeNews] = useState(true);
        return(
            <Holder>
                <Head head={'news'} collapseFunc={changeSeeNews} collapse={seeNews}/>
                
                <div className="bg-gray-700 max-h-screen" id="newsholder">
                <NewsData newsData={props.data} see={seeNews}/>
                </div>

            </Holder>
        )
    } else{
        return(
            <h1>Loading...</h1>
        )
    };
    
};