import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import InvasionsData from './InvasionsData';


export default function Invasions(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Invasions'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen">
                    <InvasionsData Invasions={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};