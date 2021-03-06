import { AnimatePresence, motion } from "framer-motion";

export default function SortieData(props) {
    const d = new Date(props.sorites.expiry);
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {props.sorites
                    ?
                        
                        <div 
                        className="mx-3 flex flex-col">
                            <h2><strong>{props.sorites.faction} sortie</strong></h2>
                            {props.sorites.variants.map((variants) =>
                                <div className="flex flex-col" key={variants.node} >
                                    <h3>{variants.missionType} | ({variants.node.replace(' (', ', ').replace(')', '')})</h3>
                                    <p title={variants.modifierDescription}>{variants.modifier}</p>
                                    <hr className="bg-slate-500 w-9/12 self-center my-3"></hr>
                                </div>
                            )}
                            <p className="text-sm">Expires {d.toUTCString()} ({props.sorites.eta})</p>
                        </div>

                    :
                    <h1>No sorites</h1>
                }
                    </motion.div>
                }
            </AnimatePresence>
        );
};