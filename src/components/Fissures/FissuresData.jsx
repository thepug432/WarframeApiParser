import { AnimatePresence, motion } from "framer-motion";

export default function FissuresData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-y-scroll max-h-screen"
                initial={{ opacity: 0, x:+100 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: +100  }}
                >
                {props.fissures
                    ?
                        props.fissures.map((data) => {
                            const d = new Date(data.expiry)
                            return(
                                <div 
                                key={data.id} 
                                className="mx-3 flex flex-col">
                                    <h2><strong>{data.missionType} | {data.node}</strong></h2>
                                    <p>{data.tier} ({data.tierNum})</p>
                                    <p className="text-sm">Expires {d.toUTCString()} ({data.eta})</p>
                                    <hr className="bg-slate-500 w-9/12 self-center my-3"></hr>
                                </div>
                            )

                        })
                        

                    :
                    <h1>No sorites</h1>
                }
                    </motion.div>
                }
            </AnimatePresence>
        );
};