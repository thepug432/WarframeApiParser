import { AnimatePresence, motion } from "framer-motion";

export default function FlashSaleData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0, x:+100 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: +100  }}
                >
                {props.Invasions
                    ?
                        
                        props.Invasions.map((data) => {
                            return(
                                <div 
                                key={data.id} 
                                className="mx-3 flex flex-col">
                                    <h2><strong>{data.desc} | {data.node}</strong></h2>
                                    <p className="text-sm">Attacker ({data.attackingFaction}) rewards: {ifempty(data.attackerReward.asString)}</p>
                                    <p className="text-sm">Defender ({data.defendingFaction}) rewards: {ifempty(data.defenderReward.asString)}</p>
                                    <hr className="bg-slate-500 w-9/12 self-center my-3"></hr>
                                </div>
                               )})

                    :
                    <h1>No Sales</h1>
                }
                    </motion.div>
                }
            </AnimatePresence>
        );
};

function ifempty(inStr) {
    if (inStr) {
        return inStr
    };
    return 'None'
};