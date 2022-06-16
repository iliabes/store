import { createContext } from "react";

interface AppContextInterface {
    name: string;
    author: string;
    url: string;
  }

const AppCtx = createContext<any | null>(null);

export default AppCtx