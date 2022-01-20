import Single from "./Single";
import { Grid, Typography } from '@mui/material'
import Greatest from './images/greatest.jpg'
import Logo from './images/logo.png'
import './App.css'
function App() {

  return (
    <>
      <Grid sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Grid item>
          <img src={Logo} width={80} height='auto' alt="" />
        </Grid>
        <Grid item> 
          <Typography variant="h3" sx={{ ml: 3, color: "#fff" }}>Youth Club Weekly Classes</Typography>
        </Grid>
      </Grid>


      <Grid container sx={{ justifyContent: 'space-evenly', mt: 2, mb: 5 }} >
        <Single src='https://youthclub.pk/wp-content/uploads/2022/01/the-key.jpg'
          title="The Key"
          speaker="Speaker: Khurram Alvi"
          address='House # 93-B, St. 66, Sector F-11/4, Islamabad'
          timings='Every Tuesday 8:00-9:00 PM'
          audience='Audience: Males only'
          href='https://goo.gl/maps/SHjSyEh9wnDRHU1Q8'
        />

        <Single src='https://youthclub.pk/wp-content/uploads/2022/01/the-light.jpg'
          title="The Light"
          speaker="Speaker: Abu Saad"
          address='House 279, street 100, I-8/4, Islamabad'
          timings='Every Friday 8:00 PM'
          audience='Audience: Males only'
          href='https://maps.app.goo.gl/kQiNuUi7hN3EPq1u9'
        />

        <Single src={Greatest}
          title="The Greatest Men"
          speaker="Speaker: Abu Saad"
          address='House# 15, Street# 56, Sector F-6/4, Islamabad'
          timings='Every Saturday 5:45 PM'
          audience='Audience: Males only'
          href='https://maps.app.goo.gl/vGyV1ck7jtuLMiXj7'
        />
      </Grid>
    </>
  );
}

export default App;
