import { useState } from "react";
import { UseInvasions } from "../../hooks/HideProvider";
import Head from '../Head'
import Hider from "../Hider";
import Holder from '../Holder';
import InvasionsData from './InvasionsData';


export default function Invasions(props) {
    const [seeDropDown, changeSeeDropDown] = useState(true)
    const view = UseInvasions()[0]
    if(props.data){
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Invasions'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                    <div className="bg-gray-700 max-h-screen">
                        <InvasionsData Invasions={props.data} see={seeDropDown}/>
                    </div>
                </Holder>
            </Hider>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};