import { useReducer } from 'react'
import { Entry } from '../../interfaces/entry';
import { EntriesContext, entriesReducer } from './';
import {v4 as uuid4} from "uuid"


export interface EntriesState {
   entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuid4(),
            description: "Lorem ipsum dolor sit Amet",
            status: "pending",
            createdAt: Date.now()
        },
        {
            _id: uuid4(),
            description: "Lorem ipsum dolor sit Amet",
            status: "Finished",
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuid4(),
            description: "Lorem ipsum dolor sit Amet",
            status: "In-Progress",
            createdAt: Date.now() - 20000
        },
    ]
}


const EntriesProvider: React.FC = ({children}) => {

const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuid4(),
            description: description,
            createdAt: Date.now(),
            status: "pending"
        }

        dispatch({
            type: "[Entry] - AddEntry",
            payload: newEntry
        })

        return true
    }

    return (
    <EntriesContext.Provider value={{
        ...state, addEntry
    }}>
        {
            children
        }
    </EntriesContext.Provider>
)
}
export default EntriesProvider