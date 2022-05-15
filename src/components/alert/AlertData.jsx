import { AnimatePresence, motion } from "framer-motion";

export default function AlertData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {props.alert
                ?
                    props.alert.map((data) => {
                            const d = new Date(data.expiry);
                            return(
                                    <div 
                                    key={data.id} 
                                    className="mx-3 flex flex-col">
                                        <h2><strong>{data.mission.description}</strong></h2>
                                        <p>{data.mission.node.replace(')', ' ')} {data.mission.type}) | Faction: {data.mission.faction} </p>
                                        <p className="text-sm">Level {data.mission.minEnemyLevel} to {data.mission.maxEnemyLevel}</p>
                                        <p>{data.mission.reward.asString.replace('cr', ' credits')}</p>
                                        <p className="text-sm">Expires ({d.toUTCString()})</p>
                                        <hr className="bg-slate-500 w-5/6 self-center my-3"></hr> 
                                    </div>

                                )}
                            )
                :  <h1>No alerts</h1>
                }
                </motion.div>
            }
        </AnimatePresence>
    );
};