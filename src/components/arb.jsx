import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Head from '../components/Head'
import Holder from '../components/Holder';


export default function Arb(props) {
    const [seeDropDown, changeSeeDropDown] = useState(true)
    if (props.data){
        return(
            <Holder>
                <Head head={'Arbitration'} collapseFunc={changeSeeDropDown} collapse={seeDropDown}/>

                <div className="bg-gray-700 max-h-screen">
                    <AnimatePresence>
                        {seeDropDown &&
                            <motion.div
                            className="overflow-auto max-h-screen"
                            initial={{ opacity: 0, x:+100 }}
                            animate={{ opacity: 1, x:0 }}
                            exit={{ opacity: 0, x: +100  }}
                            >

                            {Object.keys(props.data).length
                            ?
                                <div className="mx-3 flex flex-col">
                                    <h1><strong>{data.type} | {data.node.replace(')', '')} {data.enemy})</strong></h1>
                                </div>
                            :
                                <h1>No arbitration</h1>

                            }        
                            

                            </motion.div>
                        }
                    </AnimatePresence>
                </div>

            </Holder>
        )
    }
};