import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialMedia() {
    return (
        <div className='d-flex align-items-center position-fixed'>
            <div>
            <div>
                <FacebookIcon />
            </div>
            <div>
                <InstagramIcon />
            </div>
            </div>
        </div>
    )
}

export default SocialMedia