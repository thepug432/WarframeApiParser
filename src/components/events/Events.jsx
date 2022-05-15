import { useState } from 'react'
import Holder from '../Holder';
import EventsData from './EventsData';
import Head from '../Head';
import {UseGetEvents} from '../../hooks/HideProvider';
import Hider from '../Hider';

export default function Events(props) {
    
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        const view = UseGetEvents()[0]
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Events'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                    <div className="bg-gray-700 max-h-screen">
                        <EventsData events={props.data} see={seeDropDown}/>
                    </div>

                </Holder>
            </Hider>
        )
    } else{
        <h1>Loading...</h1>
    }
    
}