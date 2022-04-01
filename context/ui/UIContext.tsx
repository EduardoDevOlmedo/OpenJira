import { createContext } from "react";

 interface contextProps{
     sideMenuOpen: boolean;
     formMenuOpen: boolean;
     openSideMenu: () => void;
     closeSideMenu: () => void;
     openFormMenu: () => void;
     closeFormMenu: () => void;
 }

export const UIContext = createContext({} as contextProps)

