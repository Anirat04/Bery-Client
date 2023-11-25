// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, NavLink } from 'react-router-dom';
// import contexts
import { useContext } from 'react';
import { ProviderContext } from '../../../Provider/Provider';
// import Nav css
import './Navbar.css'
// import black sbg logo
import blackLogo from '../../../assets/BeryImg/logo.svg'
import useWishData from '../../../hooks/useWishData';
// const pages = ['Home', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Navbar() {
    const { user, logOut } = useContext(ProviderContext)
    const [wishlist] = useWishData()
    console.log( 'wishlist',wishlist)

    // this event handler is to log out users from the server
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user logged out')
            })
            .catch(error => console.log('error logging out', error))
    }

    const navlinks = <>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='/'>Home</NavLink>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='all_properties'>All Properties</NavLink>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='dashboard'>Dashboard</NavLink>
        <NavLink className='text-[18px] text-[#0b2c3d]  hover:text-[#b39359] lora-font' to='login'>Login</NavLink>
        <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='dashboard/wishlist'>
            <button className="btn">
                Inbox
                <div className="badge badge-secondary">+{wishlist?.length}</div>
            </button>
        </NavLink>
        {/* {
            user ? <button onClick={handleLogOut} className="btn">LogOut</button>
                : <NavLink className='text-[20px] font-extrabold hover:text-[#EEFF25]' to='login'>Login</NavLink>
        } */}
    </>
    //   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    //   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    //   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    //   };
    //   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElUser(event.currentTarget);
    //   };

    //   const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //   };

    //   const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    //   };

    return (
        <AppBar position="static" className='py-[20px]' sx={{ backgroundColor: '#e9f1ff' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters className='flex justify-between'>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}
                    <Box>
                        {/* <img src="https://i.ibb.co/XtqfBDk/logo-white.png" alt="" /> */}
                        <img src={blackLogo} alt="" />

                    </Box>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            //   onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            //   anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            //   open={Boolean(anchorElNav)}
                            //   onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page}
                                // onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}

                    {/* Menu bar */}
                    <Box className="flex justify-center gap-[60px] w-1/3" >
                        {navlinks}
                    </Box>

                    {/* user logo */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings" className='flex'>
                            <Box className={`${user? 'border border-[#0b2c3d] rounded-full pr-3 mr-3' : ''}`}>
                                <IconButton
                                    //   onClick={handleOpenUserMenu}
                                    className='flex gap-2'
                                    sx={{ p: 0, }}>
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />
                                    <Typography>{user?.displayName}</Typography>
                                </IconButton>
                            </Box>
                            <Link to={user ? '/' : 'login'}>
                                <Button
                                    onClick={handleLogOut}
                                    sx={{
                                        backgroundColor: '#0b2c3d',
                                        '&:hover': {
                                            backgroundColor: '#b39359'
                                        }
                                    }}
                                    variant="contained"
                                >
                                    {user ? 'Log Out' : 'Login'}
                                </Button>
                            </Link>
                        </Tooltip>
                        {/* <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            //   anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        //   open={Boolean(anchorElUser)}
                        //   onClose={handleCloseUserMenu}
                        >
                            <MenuItem>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>
                        </Menu> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
