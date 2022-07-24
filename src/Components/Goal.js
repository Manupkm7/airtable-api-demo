import React from 'react'
import { Box, Checkbox, Typography, Chip } from '@mui/material'
import useStyles from "../Hooks/useStyles";

const styles = () => ({
  container: {
    padding: "1rem",
    marginBottom: "2rem",
    "& .MuiCheckbox-root.Mui-disabled ": {
      color: "#dacfff",
    },
  },
  titles: {
    fontSize: "2rem",
    display: "inline",
    padding: "1rem 5rem 1rem 1rem"
  },
  titleDetail: {
    fontSize: "1.5rem",
    "& last-of-type": {
      marginTop: "1rem",
    }
  },
  boxDetails: {
    padding: "2rem",
    background: "#dacfff",
  },
  chipBox: {
    "& .MuiChip-root": {
      backgroundColor: "#D8DDE7",
      color: "#405B99",
      fontWeight: 600,
      minHeight: "36px",
    },
  },
})

const Goal = ({ goal, updates }) => {
  const classes = useStyles(styles);

  return (
    <Box sx={classes.container}>
        <Box display="flex">
            <Checkbox defaultChecked={goal.fields.complete} disabled />
            <Typography sx={classes.titles}>{goal.fields?.title}</Typography>

        </Box>
        <Box sx={classes.boxDetails}>
            <Typography sx={classes.titleDetail}>DETAILS</Typography>
            <Typography variant="body2">{goal.fields?.details}</Typography>
            <Typography sx={classes.titleDetail}>UPDATE DETAILS</Typography>
            {(updates || []).map((update, index) => (
              <Chip
              key={index}
              sx={classes.chipBox}
              label={update.fields.update}
            />
            ))}
        </Box>
    </Box>
  )
}

export default Goal