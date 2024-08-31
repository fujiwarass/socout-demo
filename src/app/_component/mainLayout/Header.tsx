'use client'

import { AppBar, IconButton, Menu, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { SideBar } from './Sidebar';
import { MenuList } from './parts/MenuList';

/**
 * メインレイアウトのヘッダー
 */
export function Header() {
    const width = 240;
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                  width: open ? `calc(100% - ${width}px)` : '100%',
                  ml: open ? `${width}px` : 0,
                  transition: 'width 0.3s ease, margin-left 0.3s ease',
                }}>
                <Toolbar>
                  {/* メニューボタン */}
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerOpen}
                    sx={{ mr: 2, ...(open && { display: 'none' })}}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                    サカウト
                  </Typography>
                </Toolbar>
            </AppBar>
            <SideBar 
              drawer={<MenuList />}
              drawerWidth={width}
              open={open}
              handleDrawerClose={handleDrawerClose}
              theme={theme}/>
        </>
    );
}