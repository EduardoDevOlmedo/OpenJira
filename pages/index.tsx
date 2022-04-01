import type { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

import Layout from '../components/layouts/Layout'
import { EntryList, NewEntry } from '../components/layouts/ui'

const HomePage: NextPage = () => {
  return (
   <Layout title="Home - Open Jira">
      <Grid container spacing={2}>
          <Grid item xs={ 12 } sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Pendientes"></CardHeader>
                    <NewEntry />
                  <EntryList status="pending" />
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="En progreso"></CardHeader>
              <EntryList status="In-Progress"/>
            </Card>
          </Grid>
          <Grid item xs={ 12 } sm={4}>
            <Card sx={{height: 'calc(100vh - 100px)'}}>
              <CardHeader title="Completados"></CardHeader>
              <EntryList status="Finished" />
            </Card>
         </Grid>
      </Grid>
   </Layout>
  )
}

export default HomePage
