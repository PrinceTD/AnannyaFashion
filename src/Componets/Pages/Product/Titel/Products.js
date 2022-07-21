import { Card, CardContent, Typography} from '@mui/material';
import React from 'react';


export default function Products() {
    return (
        <Card sx={{ minHeight: '280px', minWidth: 320 }}>
            <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                    Yosemite National Park
                </Typography>
                <Typography
                    // startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                >
                    California, USA
                </Typography>
            </CardContent>
        </Card>
    )
}
