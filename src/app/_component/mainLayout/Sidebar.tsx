import { Box, Drawer, IconButton, SwipeableDrawer, Theme } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

/**
 * サイドバーのプロップス
 */
interface SideBarProps {
    /**サイドバーの中身 */
    drawer: React.ReactNode;
    /**サイドバーの幅 */
    drawerWidth: number;
    /**サイドバーの開閉状態 */
    open: boolean;
    /**サイドバーを閉じる関数 */
    handleDrawerClose : () => void;
    /**テーマ */
    theme: Theme;
}

/**
 * メインレイアウトのサイドバー
 * @param drawer サイドバーの中身
 * @param drawerWidth サイドバーの幅
 * @param open サイドバーの開閉状態
 * @param handleDrawerClose サイドバーを閉じる関数
 * @param handleDrawerOpen サイドバーを開く関数
 * @param theme テーマ
 */
export function SideBar(
    {drawer, 
    drawerWidth,
    open,
    handleDrawerClose,
    theme  }: SideBarProps
) {
  return (
    <Box
        component="nav"
        sx={{ width: open ? drawerWidth : 0 , 
        flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={handleDrawerClose}
        > 
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          {drawer}
        </Drawer>
      </Box>
  );
}