import { AnimatePresence, motion } from "framer-motion";

export default function EventsData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-y-scroll max-h-screen"
                initial={{ opacity: 0, x:+100 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: +100  }}
                >
                {props.events
                    ?
                    props.events.map((data) => {
                            const d = new Date(data.expiry);
                            return(
                                    <div 
                                    key={data.id} 
                                    className="mx-3 flex flex-col">
                                        <h2 className="text-lg"><strong>{data.description}</strong></h2>
                                        <p className="text-sm">{data.tooltip}</p>
                                        <h2 className="text-sm">{data.victimNode} {data.node}</h2>
                                        <h2 className="text-sm">Expires {d.toUTCString()}</h2>
                                        <hr className="bg-slate-500 w-5/6 self-center my-3"></hr> 
                                    </div>
                                
                                )
                            }) 
                    :
                    <h1>No events</h1>
                }
                    </motion.div>
                }
            </AnimatePresence>
        )
}
