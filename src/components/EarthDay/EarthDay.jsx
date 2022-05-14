import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import EarthDayData from './EarthDayData';

export default function EarthDay(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Earth Cycle'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen">
                    <EarthDayData time={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};