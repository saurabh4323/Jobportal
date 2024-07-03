import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
    width: '140px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://mui.com/" style={{ textDecoration: 'none' }}>JobBox&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 2, md:8 },
                py: { xs: 6, sm: 12, md:8 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
                        <Box sx={{ ml: '-15px' }}>
                            <img
                                src={
                                    'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
                                }
                                style={logoStyle}
                                alt="logo of sitemark"
                            />
                        </Box>
                        <Typography variant="body2" fontWeight={600} gutterBottom>
                            JobPortal
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>
                            Subscribe to our JobPortal for weekly updates and Hiring.
                        </Typography>
                        <Stack direction="row" spacing={1} useFlexGap>
                            <TextField
                                id="outlined-basic"
                                hiddenLabel
                                size="small"
                                variant="outlined"
                                fullWidth
                                aria-label="Enter your email address"
                                placeholder="Your email address"
                                inputProps={{
                                    autoComplete: 'off',
                                    'aria-label': 'Enter your email address',
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '20px', // Adjust the value to your desired border radius
                                    }
                                }}
                            />

                            <Button
                                variant="contained"
                                sx={{
                                    flexShrink: 0,
                                    backgroundColor: '#3C65F5',
                                    '&:hover': {
                                        backgroundColor: '#025fcc;F5', // Ensure the hover state has the same color
                                    },
                                    borderRadius: 5,
                                }}
                            >
                                Subscribe
                            </Button>

                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Product
                    </Typography>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Features
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Testimonials
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Highlights
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Pricing
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        FAQs
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600} style={{ textDecoration: 'none' }}>
                        Company
                    </Typography>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        About us
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Careers
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Press
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="body2" fontWeight={600} style={{ textDecoration: 'none' }}>
                        Legal
                    </Typography>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Terms
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Privacy
                    </Link>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Contact
                    </Link>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Privacy Policy
                    </Link>
                    <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                        &nbsp;•&nbsp;
                    </Typography>
                    <Link color="text.secondary" href="#" style={{ textDecoration: 'none' }}>
                        Terms of Service
                    </Link>
                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://github.com/mui"
                        aria-label="GitHub"
                        sx={{ alignSelf: 'center' }}
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://x.com/MaterialUI"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/company/mui/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}