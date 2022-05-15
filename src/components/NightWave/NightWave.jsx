import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder'
import NightWaveData from './NightWaveData'
import { UseWave } from "../../hooks/HideProvider";
import Hider from "../Hider";

export default function NightWave(props) {
    const [seeNews, changeSeeNews] = useState(true);
    const view = UseWave()[0]
    if (props.data) {
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Night Wave'} collapseFunc={changeSeeNews} collapse={seeNews}/>       
                    <div className="bg-gray-700 max-h-screen">
                    <NightWaveData data={props.data} see={seeNews}/>
                    </div>
                </Holder>
            </Hider>
        )
    } else{
        return(
            <h1>Loading...</h1>
        )
    };
    
};