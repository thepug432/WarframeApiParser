import { useState } from 'react'
import AlertData from './AlertData'
import Head from '../Head'
import Holder from '../Holder'
import Hider from '../Hider';
import { UseAlerts } from '../../hooks/HideProvider'

export default function Alert(props) {
    const [seeDropDown, changeSeeDropDown] = useState(true)
    const view = UseAlerts()[0]
    if(props.data){
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'Alerts'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                    <div className="bg-gray-700 max-h-screen">
                        <AlertData alert={props.data} see={seeDropDown}/>
                    </div>
                </Holder>
            </Hider>
        )
    } else{
        <h1>Loading...</h1>
    }
    
}