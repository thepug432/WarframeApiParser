import { createContext, useContext, useState } from "react";

const GetCycle = createContext();
const GetEvents = createContext();
const GetNews = createContext();
const GetArb = createContext();
const GetAlerts = createContext();

export const UseGetCycle = () => {
    return useContext(GetCycle);
};

export const UseGetEvents = () => {
    return useContext(GetEvents);
};

export const UseNews = () => {
    return useContext(GetNews);
};

export const UseGetArb = () => {
    return useContext(GetArb);
};

export const UseAlerts = () => {
    return useContext(GetAlerts);
};

export default function HideProvider({children}){
    const [seeCycle, changeSeeCycle] = useState(true);
    const [seeEvents, changeSeeEvents] = useState(true);
    const [seeNews, changeSeeNews] = useState(true);
    const [seeArb, changeSeeArb] = useState(true);
    const [seeAlerts, changeSeeAlerts] = useState(true);

    return(
        <GetCycle.Provider value={[seeCycle, changeSeeCycle]}>
        <GetEvents.Provider value={[seeEvents, changeSeeEvents]}>
            <GetNews.Provider value={[seeNews, changeSeeNews]}>
                <GetArb.Provider value={[seeArb, changeSeeArb]}>
                    <GetAlerts.Provider value={[seeAlerts, changeSeeAlerts]}>
                        {children}
                    </GetAlerts.Provider>
                </GetArb.Provider>
             </GetNews.Provider>
        </GetEvents.Provider>
        </GetCycle.Provider>
    );
};