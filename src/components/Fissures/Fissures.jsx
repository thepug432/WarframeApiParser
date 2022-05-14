import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import FissuresData from './FissuresData';


export default function Fissures(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Fissures'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen" id="newsholder">
                    <FissuresData fissures={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};