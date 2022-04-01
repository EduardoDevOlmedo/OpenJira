import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import React from "react"
import {Entry} from "../../../interfaces/entry"

interface Props {
    entry: Entry,
    description: string
}

export const EntryCard:React.FC<Props> = ({entry, description}) => {
  return (
    <Card sx={{
        marginBottom: 1
    }}>
       <CardActionArea>
        <CardContent>
            <Typography sx={{whiteSpace: "preline"}}>
               {entry.status}: {description}
            </Typography>

            <CardActions sx={{display: "flex", justifyContent:"end", paddingRight :2}}>
                <Typography variant="body2">
                    hace 30 minutos.
                </Typography>
            </CardActions>
        </CardContent>
     </CardActionArea> 
    </Card>
  )
}
