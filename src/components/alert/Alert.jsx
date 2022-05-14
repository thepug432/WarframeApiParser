import { useState } from 'react'
import AlertData from './AlertData'
import Head from '../Head'
import Holder from '../Holder'

export default function Alert(props) {
    
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        return(
            <Holder>
                <Head head={'Alerts'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                <div className="bg-gray-700 max-h-screen">
                    <AlertData alert={props.data} see={seeDropDown}/>
                </div>

            </Holder>
        )
    } else{
        <h1>Loading...</h1>
    }
    
}