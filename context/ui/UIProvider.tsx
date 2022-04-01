import { useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";

export interface UIState {
    sideMenuOpen: boolean;
    formMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    formMenuOpen: false
}


const UIProvider: React.FC = ({children}) => {
  
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)
  
    const openSideMenu = () => {
      dispatch({
              type: "UI - Open Sidebar",}
      )
    }

    const closeSideMenu = () => {
      dispatch({
        type: "UI - Close Sidebar"
      })
    }

    const openFormMenu = () => {
      dispatch({
        type: "UI - Open Form"
      })
    }

    const closeFormMenu = () => {
      dispatch({
        type: "UI - Close Form"
      })
    }

    return (
      <UIContext.Provider value={
          {
              ...state,
              openSideMenu,
              closeSideMenu,
              openFormMenu,
              closeFormMenu
        }}>
          {
              children
          }
      </UIContext.Provider>
  )
}

export default UIProvider