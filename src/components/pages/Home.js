import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>Welcome!, This is an authentication system build in React.js and Node.js.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
