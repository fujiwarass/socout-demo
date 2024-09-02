import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";


/**
 * 動画をアップロードするフィールド
 */
export function UploadImageFeild() {
    //1,Refを作成
    const fileInputRef = useRef<HTMLInputElement>(null);

    // 画像URLを管理するためのstateを作成
    const [imageSrc, setImageSrc] = useState("");

    //3,Refを使ってファイル選択ダイアログを開く
    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    //4,ファイルが選択された時の処理
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
        }
    }

    return (
        <>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                
                }}>
                <Image
                    src={imageSrc}
                    height={250}
                    width={250}
                    alt="plofile image"
                    style={{ display:  imageSrc === "" ? "none" : "block",border: '1px solid skyblue', }}
                />
                <Button variant="contained" onClick={handleButtonClick} sx={{width: '250px'}}>
                    画像アップロード
                </Button>
                <TextField
                    type="file"
                    sx={{ display: 'none' }}
                    inputRef={fileInputRef} //2,Refを設定
                    onChange={handleFileChange}
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                />
            </Box>
        </>
    );
}