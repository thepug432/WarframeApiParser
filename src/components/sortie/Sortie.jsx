import { useState } from "react";
import { UseSortie } from "../../hooks/HideProvider";
import Head from '../Head'
import Hider from "../Hider";
import Holder from '../Holder';
import SortieData from './SortieData';


export default function Sortie(props) {
    const [seeDropDown, changeSeeDropDown] = useState(true)
    const view = UseSortie()[0]
    if(props.data){
        
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Sortie'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                    <div className="bg-gray-700 max-h-screen">
                        <SortieData sorites={props.data} see={seeDropDown}/>
                    </div>
                </Holder>
            </Hider>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};