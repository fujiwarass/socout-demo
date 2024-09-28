import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * 確認ダイアログProps
 */
interface CheckModalProps {
    /**ダイアログタイトル */
    title: string;
    /**ダイアログ内容 */
    content: string;
    /**OK処理 */
    okEvent: () => void;
}

/**
 * 確認ダイアログ
 * @param title ダイアログタイトル
 * @param content ダイアログ内容
 * @param okEvent OK処理
 * @returns 
 */
export function CheckModal({title, content, okEvent}: CheckModalProps) {
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
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {content}
                        </DialogContentText>
                        
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={backEvent}>戻る</Button>
                        <Button href="/player" onClick={() => nextEvent(okEvent)}>OK</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
}