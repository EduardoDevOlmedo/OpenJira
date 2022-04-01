import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';


interface contextProps{
    entries: Entry[]
    addEntry: (description: string) => Boolean;
}

export const EntriesContext = createContext({} as contextProps)