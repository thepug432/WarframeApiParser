import { useEffect, useState } from "react";
import {GetPlatform} from '../hooks/PlatformContext';
import News from "./News";
import Events from './Events';
import Alert from './Alert';

export default function Index() {
    const [data, changeData] = useState([]);
    const platform = GetPlatform();

    useEffect(() => {
        fetch(`https://api.warframestat.us/${platform}`)
        .then(response => response.json())
        .then(response => changeData(response))
    }, []);
    

    return(
        <div className="flex">
            <News data={data.news} />
            <Events data={data.events} />
            <Alert data={data.alerts} />
        </div>
    );
};