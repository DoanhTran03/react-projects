import { RefObject, SetStateAction, createContext, useContext, useState } from "react";

interface DefaultContextType {
    link: EventTarget & Element | null;
    setLink: React.Dispatch<SetStateAction<EventTarget & Element |null>>;
}
interface ContextProps {
    children: JSX.Element;
}
const Context = createContext<DefaultContextType | null>(null);
const AppProvider = ({children}: ContextProps) => {
    const [link,setLink] = useState<EventTarget & Element | null>(null);    
    return (
        <Context.Provider value={{
            link,
            setLink
        }}>
            {children}
    </Context.Provider>
  )
}
export const useGlobalState = () => {
    return useContext(Context);
}
export default AppProvider