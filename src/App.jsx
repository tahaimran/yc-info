import Single from "./Single";
import { Grid, Typography } from '@mui/material'
import Greatest from './images/greatest.jpg'
import Logo from './images/logo.png'
import './App.css'
function App() {

  return (
    <>
      <Grid sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>

        <img src={Logo} width={70} alt="" />
        <Typography variant="h2" sx={{ ml: 3, color: "#F58220" }}>Halaqahs</Typography>
      </Grid>


      <Grid container sx={{ justifyContent: 'space-evenly', mt:2,mb:5 }} >
        <Single src='https://youthclub.pk/wp-content/uploads/2022/01/the-key.jpg'
          title="The Key Halaqah"
          speaker="Speaker: Khurram Alvi"
          audience='Audience: Males only'
          href='https://goo.gl/maps/SHjSyEh9wnDRHU1Q8'
        />

        <Single src='https://youthclub.pk/wp-content/uploads/2022/01/the-light.jpg'
          title="The Light Halaqah"
          speaker="Speaker: Abu Saad"
          audience='Audience: Males only'
          href='https://maps.app.goo.gl/kQiNuUi7hN3EPq1u9'
        />

        <Single src={Greatest}
          title="The Greatest Men"
          speaker="Speaker: Abu Saad"
          audience='Audience: Males only'
          href='https://maps.app.goo.gl/vGyV1ck7jtuLMiXj7'
        />
      </Grid>
    </>
  );
}

export default App;
