import { createContext, useContext, useState } from "react";

const GetCycle = createContext();
const GetEvents = createContext();
const GetNews = createContext();
const GetArb = createContext();

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

export default function HideProvider({children}){
    const [seeCycle, changeSeeCycle] = useState(true);
    const [seeEvents, changeSeeEvents] = useState(true);
    const [seeNews, changeSeeNews] = useState(true);
    const [seeArb, changeSeeArb] = useState(true);

    return(
        <GetCycle.Provider value={[seeCycle, changeSeeCycle]}>
            <GetEvents.Provider value={[seeEvents, changeSeeEvents]}>
                <GetNews.Provider value={seeNews}>
                    <GetArb.Provider value={[seeArb, changeSeeArb]}>
                        {children}
                    </GetArb.Provider>
                </GetNews.Provider>
            </GetEvents.Provider>
        </GetCycle.Provider>
    );
};