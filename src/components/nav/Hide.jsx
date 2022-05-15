import { motion } from "framer-motion";

export default function Hide({head, li, title}) {

    const hide = (e, parm) => {
        if (parm[0]){
            e.currentTarget.firstChild.setAttribute("fill", "gray")
        } else{
            e.currentTarget.firstChild.setAttribute("fill", "currentColor")
        }
        parm[1](!parm[0]);
    };

    return(
        <motion.td whileHover={{ scale: 1.1 }} title={title} className="mx-2 p-3"><h1 onClick={(e) => hide(e, li)}>{head}</h1></motion.td>
    )
}

