import Airtable from 'airtable';
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import Goal from './Components/Goal';
import useStyles from "./Hooks/useStyles";

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(process.env.REACT_APP_AIRTABLE_KEY_PROJECT)

const styles = () => ({
  title: {
    fontSize: "3rem",
    textAlign: "center",
    margin: "1rem 0"
  }
})

function App() {
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);
  const classes = useStyles(styles);

  useEffect(()=> {
    base("goals")
    .select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      setGoals(records)
      fetchNextPage();
    })
    base("updates")
    .select({ view: "Grid view" })
    .eachPage((records, fetchNextPage) => {
      setUpdates(records)
      fetchNextPage();
    })
  }, [])
  
  return (
    <div className="App">
        <Typography sx={classes.title}>My Goals</Typography>
        {(goals || []).map((goal) => (
          <Goal
            key={goal.id}
            goal={goal}
            updates={updates.filter(update => update.fields.goals[0] === goal.id)}
          />
        ))}
    </div>
  );
}

export default App;
