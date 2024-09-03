import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";


/**
 * 動画をアップロードするフィールドのプロップス
 */
interface UploadMovieFeildProps {
    /**ボタン名 */
    buttonName: string
}

/**
 * 動画をアップロードするフィールド
 */
export function UploadMovieFeild({ buttonName }: UploadMovieFeildProps) {
    const width = 250;
    //1,Refを作成
    const videoInputRef = useRef<HTMLInputElement>(null);

    // 動画URLを管理するためのstateを作成
    const [videoSrc, setVideoSrc] = useState("");

    //3,Refを使ってファイル選択ダイアログを開く
    const handleButtonClick = () => {
        if (videoInputRef.current) {
            videoInputRef.current.click();
        }
    };

    //4,ファイルが選択された時の処理
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const videoUrl = URL.createObjectURL(file);
            setVideoSrc(videoUrl);
        }
    }

    const videoRef = useRef<HTMLVideoElement>(null);

    // 動画の再生、停止を管理するためのstateを作成
    const [isPlaying, setIsPlaying] = useState(false);

    // 再生、停止ボタンが押された時の処理
    const handlePlay = () => {
        if(isPlaying){
            videoRef.current?.pause();
        }else{
            videoRef.current?.play();
        }
        setIsPlaying(prev => !prev);
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ 
                    display: videoSrc === "" ? "none" : "flex",
                    flexDirection: 'column'
                    }}>
                    <video
                        src={videoSrc}
                        height={250}
                        width={width}
                        ref={videoRef}
                    >
                        <source src={videoSrc} />
                    </video>
                    <Button onClick={handlePlay} sx={{p: '5px'}}>
                        {isPlaying ? "一時停止" : "再生"}
                    </Button>
                </Box>

                <Button variant="contained" onClick={handleButtonClick} sx={{ width: width }}>
                    {buttonName}
                </Button>
                <TextField
                    type="file"
                    sx={{ display: 'none' }}
                    inputRef={videoInputRef} //2,Refを設定
                    onChange={handleFileChange}
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                />

            </Box>
        </>
    );
}