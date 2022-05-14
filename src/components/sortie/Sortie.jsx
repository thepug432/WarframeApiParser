import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import SortieData from './SortieData';


export default function Sortie(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Sortie'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen">
                    <SortieData sorites={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};