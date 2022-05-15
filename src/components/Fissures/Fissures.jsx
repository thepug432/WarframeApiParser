import { useState } from "react";
import { UseFissures } from "../../hooks/HideProvider";
import Head from '../Head'
import Hider from "../Hider";
import Holder from '../Holder';
import FissuresData from './FissuresData';


export default function Fissures(props) {
    const [seeDropDown, changeSeeDropDown] = useState(true)
    const view = UseFissures()[0]
    if(props.data){
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Fissures'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                    <div className="bg-gray-700 max-h-screen">
                        <FissuresData fissures={props.data} see={seeDropDown}/>
                    </div>
                </Holder>
            </Hider>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};