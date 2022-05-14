import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder'
import NightWaveData from './NightWaveData'

export default function NightWave(props) {
    if (props.data) {
        const [seeNews, changeSeeNews] = useState(true);
        return(
            <Holder>
                <Head head={'Night Wave'} collapseFunc={changeSeeNews} collapse={seeNews}/>
                
                <div className="bg-gray-700 max-h-screen">
                <NightWaveData data={props.data} see={seeNews}/>
                </div>

            </Holder>
        )
    } else{
        return(
            <h1>Loading...</h1>
        )
    };
    
};