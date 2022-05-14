import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
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
            <h1 className="text-2xl text-center border border-gray-900 flex"> 
                <strong className="ml-4">News</strong> 
                <i className="ml-auto mr-4 my-auto" onClick={() => changeSeeNews(!seeNews)}><AiFillCaretDown size={30}/></i>
            </h1>
                
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