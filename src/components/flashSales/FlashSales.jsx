import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import FlashSaleData from './FlashSaleData';


export default function FlashSale(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Sales'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen">
                    <FlashSaleData sale={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    };
    
};