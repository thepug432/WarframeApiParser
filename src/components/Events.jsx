import { useState } from 'react'
import { motion } from 'framer-motion'
import EventsData from './EventsData'
import Head from './Head'

export default function Events(props) {
    
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <motion.div
            id="EventsMain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="basis-1/5 text-white rounded-md max-h-screen">
                <Head head={'events'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen" id="newsholder">
                <EventsData events={props.data} see={seeDropDown}/>
                </div>

            </motion.div>
        )
    } else{
        <h1>Loading...</h1>
    }
    
}