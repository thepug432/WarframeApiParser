import { AnimatePresence, motion } from "framer-motion";

export default function NewsData(props) {
    return(
        <AnimatePresence>
            {props.see &&
                <motion.div
                className="overflow-y-scroll max-h-screen"
                initial={{ opacity: 0, x:+100 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: +100  }}
                >
                    {props.newsData.map((data) => {
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
                        }
                    </motion.div>
                }
            </AnimatePresence>
        )
}