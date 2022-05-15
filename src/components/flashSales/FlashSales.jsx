import { useState } from "react";
import { UseSales } from "../../hooks/HideProvider";
import Head from '../Head'
import Hider from "../Hider";
import Holder from '../Holder';
import FlashSaleData from './FlashSaleData';


export default function FlashSale(props) {
    const [seeDropDown, changeSeeDropDown] = useState(true)
    const view = UseSales()[0]
    if(props.data){
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Sales'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                    <div className="bg-gray-700 max-h-screen">
                        <FlashSaleData sale={props.data} see={seeDropDown}/>
                    </div>
                </Holder>
            </Hider>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};