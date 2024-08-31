import { AttachMoneyOutlined, ContactPhoneOutlined, HomeOutlined, ModeCommentOutlined } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import Link from 'next/link';

/**
 * メニューの型定義
 */
interface menuItem {
  /** メニュー名 */
  text: string,
  /** メニューのパス */
  path: string,
  /** メニューのアイコン */
  icon: React.ComponentType,
}

/**
 * サイドバーに表示するメニュー一覧
 * (メニュー名: アイコン)
 */
export function MenuList() {
    //メニューの一覧
    const MenuListItem :  menuItem[]= [
      {text: "ホーム", path: "/", icon: HomeOutlined},
      {text: "スカウト一覧", path: "", icon: ContactPhoneOutlined},
      {text: "メッセージ一覧", path: "", icon: ModeCommentOutlined},
      {text: "チケット", path: "", icon: AttachMoneyOutlined}
    ]
    
    return (
        <>
           <Toolbar />
           <Divider />
           <List>
           {MenuListItem.map((item,index) => (
              <Link href={item.path} key={index}>
               <ListItem key={index} disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                     <item.icon />
                   </ListItemIcon>
                   <ListItemText primary={item.text} />
                 </ListItemButton>
               </ListItem>
              </Link>
             ))}
           </List>
        </>
    );
}