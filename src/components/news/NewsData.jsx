import { AnimatePresence, motion } from "framer-motion";

export default function NewsData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-auto max-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0  }}
                >
                {props.newsData 
                    ?
                    props.newsData.map((data) => {
                            const d = new Date(data.date);
                            return(
                                    <div 
                                    key={data.id} 
                                    className="mx-3 flex flex-col">
                                        <motion.a 
                                        whileHover={{ scale:1.05 }}
                                        href={data.link} 
                                        className="text-lg">
                                            <strong>{data.message}</strong>
                                        </motion.a>
                                        <p className="text-sm">Posted {data.eta}. ({d.toUTCString()})</p>
                                        <hr className="bg-slate-500 w-5/6 self-center my-3"></hr> 
                                    </div>
                                
                                )
                            }) 
                        
                    :
                        <h2>No News</h2>
                }
                    
                    </motion.div>
                }
            </AnimatePresence>
        )
};