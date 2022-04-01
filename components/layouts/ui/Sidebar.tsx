import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useContext } from "react";
import { UIContext } from "../../../context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send", "Draft"]

const Sidebar = () => {
 
 const {sideMenuOpen, closeSideMenu} = useContext(UIContext)
  
 return (
    <Drawer
    anchor="left"
    open={sideMenuOpen}
    onClose={closeSideMenu}
    >
        <Box sx={{padding: "5px 10px"}}>
            <Typography variant="h4">
                Menú
            </Typography>
        </Box>

        <Box sx={{width: 250}}>
        <List>
            {
                menuItems.map((text, index) => {
                   return(
                    <ListItem button key={text}>
                    <ListItemIcon>
                        { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
                    </ListItemIcon>
                    <ListItemText primary={text}>

                    </ListItemText>
                    </ListItem>
                   )
                })
            }
        </List>
        <Divider />
        </Box>
        <Box sx={{width: 250}}>
        <List>
            {
                menuItems.map((text, index) => {
                   return(
                    <ListItem button key={text}>
                    <ListItemIcon>
                        { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
                    </ListItemIcon>
                    <ListItemText primary={text}>

                    </ListItemText>
                    </ListItem>
                   )
                })
            }
        </List>

        </Box>
    </Drawer>

 )
}

export default Sidebar