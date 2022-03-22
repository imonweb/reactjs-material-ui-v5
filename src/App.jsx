import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';


const App = () => {
  const classes = useStyles();
  return ( 
    <>
     <CssBaseline />
     <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant="h6">
          Photo Album
        </Typography>
      </Toolbar>
     </AppBar>
     <main>
       <div className={classes.container}>
         <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen.
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
                
              </Grid>
            </Grid>
          </div>
         </Container>
       </div>
       <Container className={classes.cardGrid} maxWidth="md">
         <Grid container spacing={4}>
          <Grid item>
            <Card className={classes.card}>
              <CardMedia 
                className={classes.CardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.CardContent}>
                <Typography gutterBottom variant="h5">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
         </Grid>

       </Container>
     </main>
    </>
   );
}
 
export default App;