import { AttachMoneyOutlined, ContactPhoneOutlined, HomeOutlined, ModeCommentOutlined } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';

/**
 * サイドバーに表示するメニュー一覧
 * (メニュー名: アイコン)
 */
export function MenuList() {
    const MenuListItem : Record<string, JSX.Element> = {
        ホーム: <HomeOutlined fontSize='small'/>,
        スカウト一覧: <ContactPhoneOutlined fontSize='small'/>, 
        メッセージ一覧: <ModeCommentOutlined fontSize='small'/>, 
        チケット: <AttachMoneyOutlined fontSize='small'/>
       };
    
    return (
        <>
           <Toolbar />
           <Divider />
           <List>
           {['ホーム', 'スカウト一覧', 'メッセージ一覧', 'チケット'].map((text) => (
               <ListItem key={text} disablePadding>
                 <ListItemButton>
                   <ListItemIcon>
                   {MenuListItem[text]}
                   </ListItemIcon>
                   <ListItemText primary={text} />
                 </ListItemButton>
               </ListItem>
             ))}
           </List>
        </>
    );
}