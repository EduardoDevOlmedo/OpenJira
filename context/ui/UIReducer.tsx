import { UIState } from "./UIProvider";

type UIType = 
|{ type: "UI - Open Sidebar"} 
|{ type: "UI - Close Sidebar"}
|{ type: "UI - Open Form"}
|{ type: "UI - Close Form"}

export const UIReducer = (state: UIState, action: UIType):UIState => {
    
    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state, 
                sideMenuOpen: true
            }
        case 'UI - Close Sidebar': 
            return {
                ...state,
                sideMenuOpen: false
            }
        case "UI - Open Form": 
            return {
                ...state,
                formMenuOpen: true
            }
        case "UI - Close Form": 
            return {
                ...state,
                formMenuOpen: false
            }
        default:
            return state;
    }


}
