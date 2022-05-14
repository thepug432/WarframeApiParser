import { useEffect, useState } from "react";
import {GetPlatform} from '../hooks/PlatformContext';
import News from "./news/News";
import Events from './events/Events';
import Alert from './alert/Alert';
import Fissures from './Fissures/Fissures';
import Sortie from './sortie/Sortie'
import FlashSale from './flashSales/FlashSales'

export default function Index() {
    const [data, changeData] = useState([]);
    const platform = GetPlatform();

    useEffect(() => {
        fetch(`https://api.warframestat.us/${platform}`)
        .then(response => response.json())
        .then(response => changeData(response))
    }, []);
    

    return(
        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-1">
            <News data={data.news} />
            <Events data={data.events} />
            <Alert data={data.alerts} />
            <Sortie data={data.sortie} />
            <Fissures data={data.fissures} />
            <FlashSale data={data.flashSales} />
        </div>
    );
};