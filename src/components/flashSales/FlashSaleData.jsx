import { AnimatePresence, motion } from "framer-motion";

export default function FlashSaleData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                {props.sale
                    ?
                        
                        props.sale.map((data) => {
                            const d = new Date(data.expiry)
                            return(
                                <div 
                                key={data.id} 
                                className="mx-3 flex flex-col">
                                    <h2><strong>{data.item}</strong></h2>
                                    <p className="text-sm">Expires {d.toUTCString()} ({data.eta})</p>
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