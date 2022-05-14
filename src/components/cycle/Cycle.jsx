import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import CycleData from './CycleData';

export default function Cycle(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={props.title} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen">
                    <CycleData time={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};