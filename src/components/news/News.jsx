import { useState } from "react";
import Head from '../Head';
import Holder from '../Holder';
import NewsData from './NewsData';
import {UseNews} from '../../hooks/HideProvider';
import Hider from '../Hider';

export default function News(props) {
    if (props.data) {
        const [seeNews, changeSeeNews] = useState(true);
        const view = UseNews()[0]
        return(
            <Hider view={view}>
                <Holder>
                    <Head head={'News'} collapseFunc={changeSeeNews} collapse={seeNews}/>
                    <div className="bg-gray-700 max-h-screen">
                        <NewsData newsData={props.data} see={seeNews}/>
                    </div>
                </Holder>    
            </Hider>
        )
    } else{
        return(
            <h1>Loading...</h1>
        )
    };
    
};