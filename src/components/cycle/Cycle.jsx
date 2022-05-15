import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import CycleData from './CycleData';
import {UseGetCycle} from '../../hooks/HideProvider';
import Hider from "../Hider";

export default function Cycle(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        const view = UseGetCycle()[0]
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={props.title} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                    <div className="bg-gray-700 max-h-screen">
                        <CycleData time={props.data} see={seeDropDown}/>
                    </div>
                </Holder>
            </Hider> 
        )
    } else{
        <h1>Loading...</h1>
    };
    
};