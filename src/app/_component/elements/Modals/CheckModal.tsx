import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * 確認ダイアログProps
 */
interface CheckModalProps {
    /**ダイアログタイトル */
    title: string;
    /**OK処理 */
    okEvent: () => void;
    /** */
    children?: React.ReactNode;
}

/**
 * 確認ダイアログ
 * @param title ダイアログタイトル
 * @param children ダイアログ内容
 * @param okEvent OK処理
 * @returns 
 */
export function CheckModal({title, okEvent, children}: CheckModalProps) {
    const router = useRouter()
    const [open, setOpen] = useState(true)

    const backEvent = () => {
        router.back()
    }

    const nextEvent = (okEvent: () => void) => {
        okEvent();
        setOpen(false)
    }
    return (
        <>
            <Box>
                <Dialog open={open}>
                    <DialogTitle 
                        id="alert-dialog-title" 
                        sx={{
                            backgroundColor: 'DeepSkyBlue',
                            color: 'white'
                            }}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText 
                            id="alert-dialog-description" 
                        >
                            {children}
                        </DialogContentText>
                        
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
                        <Button onClick={backEvent} variant="outlined">戻る</Button>
                        <Button href="/player" onClick={() => nextEvent(okEvent)} variant="outlined">OK</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
}