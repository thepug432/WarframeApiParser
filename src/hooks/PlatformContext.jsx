import { createContext, useContext, useState } from "react";

const GetPlatformContext = createContext();
const UpdateGetPlatformContext = createContext();

export const GetPlatform = () => {
    return useContext(GetPlatformContext);
};

export const UpdateGetPlatform = () => {
    return useContext(UpdateGetPlatformContext);
};

export function savePlatform(val) {
    localStorage.setItem('platform', val);
    return;
}

export default function PlatformProvider({ value, children}){
    const [platform, changePlatform] = useState(value);
    return(
        <GetPlatformContext.Provider value={platform}>
            <UpdateGetPlatformContext.Provider value={changePlatform}>
                {children}
            </UpdateGetPlatformContext.Provider>
        </GetPlatformContext.Provider>
    )
};