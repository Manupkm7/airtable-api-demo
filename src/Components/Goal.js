import { Box, Checkbox, Typography } from '@mui/material'
import React from 'react'

const Goal = ({ goal, updates }) => {
  return (
    <Box>
        <Box>
            <Checkbox defaultChecked={goal.fields.complete} disabled />
        </Box>
        <Typography variant="h2">{goal.fields?.title}</Typography>
        <Box>
            <Typography variant="h3">DETAILS</Typography>
            <Typography variant="body2">{goal.fields?.details}</Typography>
            <Typography variant="h3">DETAILS</Typography>
            {(updates || []).map((update, index) => (
                <Typography variant="body2" key={index}>{update.fields.update}</Typography>
            ))}
        </Box>
    </Box>
  )
}

export default Goal