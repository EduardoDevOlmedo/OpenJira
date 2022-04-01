import { List, Paper } from "@mui/material"
import { useContext, useMemo } from "react"
import { EntriesContext } from "../../../context/entries"
import { EntryStatus } from "../../../interfaces/entry"
import { EntryCard } from "./EntryCard"

interface Props {
  status: EntryStatus
}

const EntryList:React.FC<Props> = ({status}) => {

  const {entries} = useContext(EntriesContext)
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status) ,[entries, status])
  
  return (
    <div>
        <Paper sx={{height: 'calc(100vh - 250px)', padding: "2px 6px", overflow: 'hidden', backgroundColor: "transparent"}}>
            <List sx={{opacity: 1}}>
                {
                  entriesByStatus.map(entry => (
                    <EntryCard key={entry._id} description={entry.description} entry={entry}/>
                  ))
                }
            </List>
        </Paper>
    </div>
  )
}

export {EntryList}