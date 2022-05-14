import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function head(props) {
    return(
        <h1 className="text-2xl text-center border border-gray-900 flex"> 
            <strong className="ml-4">{props.head}</strong> 
            <i className="ml-auto mr-4 my-auto" onClick={() => props.collapseFunc(!props.collapse)}><AiFillCaretDown size={30}/></i>
        </h1>
    );
};