import { Box, Button, TextField } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";

/**
 * 画像をアップロードするフィールドのプロップス
 */
interface UploadImageFeildProps {
    /**ボタン名 */
    buttonName: string
    /**画像タイトル */
    imageTitle: string
    /**高さ */
    height: number
    /**幅 */
    width: number
}

/**
 * 画像をアップロードするフィールド
 */
export function UploadImageFeild({ buttonName , imageTitle, height, width}: UploadImageFeildProps) {
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
                <Box sx={{ 
                     height: height,
                     width: width,
                     display: imageSrc === "" ? "flex" : "none",
                     backgroundColor: 'lightgray',
                     border: '1px dashed skyblue',
                     justifyContent: 'center',
                     alignItems: 'center',
                     textAlign: 'center',
                     }}>
                    {imageTitle}
                </Box>
                <Image
                    src={imageSrc}
                    height={height}
                    width={width}
                    alt="plofile image"
                    style={{ display:  imageSrc === "" ? "none" : "block",border: '1px solid skyblue', }}
                />
                <Button variant="contained" onClick={handleButtonClick} sx={{width: width}}>
                    {buttonName}
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