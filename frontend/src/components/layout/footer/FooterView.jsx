import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { StyledEngineProvider, Badge } from '@mui/material'
import { Link } from 'react-router-dom'

import classes from './footer.module.scss'

const FooterView = ({ currentPage, onPageChange, notificationsNumber }) => (
    <div className={classes.container}>
        <StyledEngineProvider injectFirst>
            <BottomNavigation
                showLabels
                value={currentPage}
                onChange={onPageChange}
                className={classes.nav}
            >
                <BottomNavigationAction
                    className={classes.navIcon}
                    value="/"
                    label="Home"
                    icon={<HomeIcon />}
                    component={Link}
                    to="/"
                />
                <BottomNavigationAction
                    className={classes.navIcon}
                    value="/search"
                    label="Search"
                    icon={<SearchIcon />}
                    component={Link}
                    to="/search"
                />
                <BottomNavigationAction
                    className={classes.navIcon}
                    value="/notifications"
                    label="Notifications"
                    icon={
                        <Badge
                            badgeContent={notificationsNumber}
                            color="error"
                            max={10}
                            overlap="circular"
                        >
                            <NotificationsIcon />
                        </Badge>
                    }
                    component={Link}
                    to="/notifications"
                />
            </BottomNavigation>
        </StyledEngineProvider>
    </div>
)

export default FooterView
