import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { basicTheme, darkTheme } from '../themes'
import UIProvider from '../context/ui/UIProvider'
import EntriesProvider from '../context/entries/EntriesProvider'



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
<EntriesProvider>
  <UIProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </UIProvider>
</EntriesProvider>
  )
}

export default MyApp
