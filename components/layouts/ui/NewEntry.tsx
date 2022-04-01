
import { Button, TextField } from "@mui/material"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box } from "@mui/system";
import { ChangeEvent, useContext, useState } from "react";
import { EntriesContext } from "../../../context/entries";
import { UIContext } from "../../../context/ui";

export const NewEntry = () => {
 
  const {addEntry} = useContext(EntriesContext)
  const {formMenuOpen, openFormMenu, closeFormMenu} = useContext(UIContext)

 const [inputValue, setInputValue] = useState("")
 const [touched, isTouched] = useState(false)

 const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
   setInputValue(event.target.value)
 }

 const reset = () => {
   setInputValue("");
   isTouched(false)
   closeFormMenu()
}

 const onSave = () => {
   if(inputValue.length === 0) return;
   addEntry(inputValue) && reset()
 }

  return (
      <Box sx={{
        marginBottom: 2, paddingX: 1
      }}>

      {
        formMenuOpen ? (
          <>
          <TextField 
        fullWidth
        sx={{marginTop: 2, marginBottom: 1}}
        placeholder="Nueva entada"
        autoFocus
        multiline
        label="Nueva entrada"
        error={inputValue.length <= 0 && touched}
        helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
        value={inputValue}
        onChange={onTextFieldChanges}
        onBlur={() => isTouched(true)}
      />
        <Box display="flex" justifyContent="space-between">
          <Button variant="text"
            onClick={() => {closeFormMenu(); isTouched(false)} }
          >
            Cancelar
          </Button>

          <Button variant="outlined"
          endIcon={<SaveOutlinedIcon/>}
          color="secondary"
          onClick={onSave}
          >
            Guardar
        </Button>
          </Box>
          </>
        ) : (
    <Button sx={{marginTop: 2}}
        startIcon={<AddIcon />}
        fullWidth
        variant="outlined"
        onClick={() => openFormMenu()}
      >
        Agregar Tarea
      </Button>
        )
      }
 
      </Box>
  )
}

