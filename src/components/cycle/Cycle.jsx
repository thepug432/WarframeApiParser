import { useState } from "react";
import Head from '../Head'
import Holder from '../Holder';
import CycleData from './CycleData';
import {UseGetCycle} from '../../hooks/HideProvider';
import { AnimatePresence, motion } from "framer-motion";

export default function Cycle(props) {
    if(props.data){
        const [seeDropDown, changeSeeDropDown] = useState(true)
        const view = UseGetCycle()[0]
        return(
            <AnimatePresence>
                {view &&
                    <motion.div
                    initial={{ opacity: 0, scale:0.4 }}
                    animate={{ opacity: 1, scale:1 }}
                    exit={{ opacity: 0, scale:0.4  }}
                    >
                        <Holder>
                            <Head head={props.title} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>
                            <div className="bg-gray-700 max-h-screen">
                                <CycleData time={props.data} see={seeDropDown}/>
                            </div>
                        </Holder>
                    </motion.div>
                } 
            </AnimatePresence> 
        )
    } else{
        <h1>Loading...</h1>
    };
    
};