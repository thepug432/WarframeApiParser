import { useState } from 'react'
import Holder from '../Holder'
import EventsData from './EventsData'
import Head from '../Head'

export default function Events(props) {
    
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Events'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen" id="newsholder">
                    <EventsData events={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    }
    
}