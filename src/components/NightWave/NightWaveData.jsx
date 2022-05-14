import { AnimatePresence, motion } from "framer-motion";

export default function NightWaveData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0, x:+100 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: +100  }}
                >
                {props.data 
                    ?
                        <div 
                        className="mx-3 flex flex-col">
                        <p><strong>Challanges end {new Date(props.data.expiry).toDateString()}</strong></p>
                        <hr className="bg-slate-500 w-5/6 self-center my-3"></hr>
                            {props.data.activeChallenges.map((data) => {
                                return(
                                    <div key={data.id} className="flex flex-col">
                                    <h2><strong>{data.title}</strong></h2>
                                    <p>{data.desc}</p>
                                    <p className="text-sm">Reputation: {data.reputation}</p>
                                    <hr className="bg-slate-500 w-5/6 self-center my-3"></hr> 
                                    </div>
                                )
                            })}
                        </div> 
                    :
                        <h2>No Nightwave Data avalible</h2>
                }
                    
                    </motion.div>
                }
            </AnimatePresence>
        )
};