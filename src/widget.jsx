import React from 'react'
import { Card, CardActions, CardContent, Button }  from '@mui/material';
import { Typography } from '@mui/material';


function WidgetCalendar() {
    
    return (
    <Card variant="outlined" sx={{ maxWidth: 345, backgroundColor: "#F5F7FE" }}>    
        <CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button size="large" variant="contained">
                    <Typography display="block" gutterBottom variant="button">
                        Calendar
                    </Typography>
                </Button>
                <Button disabled size="large" variant="contained">
                    <Typography display="block" gutterBottom variant="caption">
                        Reminder
                    </Typography>
                </Button>
            </CardActions>
            
        </CardContent>
        <CardContent>
                <Typography gutterBottom variant="h6">
					Calendar widget
				</Typography>
        </CardContent>
    </Card>
    );
}

export default WidgetCalendar