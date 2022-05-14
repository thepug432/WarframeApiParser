import { motion } from "framer-motion";
import { useState } from "react";
import Head from './Head'
import NewsData from './NewsData'

export default function News(props) {
    if (props.data) {
        const [seeNews, changeSeeNews] = useState(true);
        return(
            <motion.div
            id="NewsMain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="basis-1/5 text-white rounded-md max-h-screen">
                <Head head={'news'} collapseFunc={changeSeeNews} collapse={seeNews}/>
                
                <div className="bg-gray-700 max-h-screen" id="newsholder">
                <NewsData newsData={props.data} see={seeNews}/>
                </div>

            </motion.div>
        )
    } else{
        return(
            <h1>Loading...</h1>
        )
    };
    
};