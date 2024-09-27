import { Player } from "@/feature/player/types/Player";
import { Box, Button } from "@mui/material";
import { useRef, useState } from "react";

/**
 * 動画表示コンポーネントProps
 */
interface DisplayMovieProps {
    /**高さ */
    height: number,
    /**プレイヤー情報 */
    player: Player | null
}

/**
 * 動画表示用コンポーネント
 * @param player プレイヤー情報
 * @param height 高さ
 * @returns 
 */
export function DisplayMovie({ height, player }: DisplayMovieProps) {
    const videoSrc = player?.play_video_url === "" ? "" : player?.play_video_url;

    //Refを作成
    const videoRef = useRef<HTMLVideoElement>(null);

    // 動画の再生、停止を管理するためのstateを作成
    const [isPlaying, setIsPlaying] = useState(false);

    // 再生、停止ボタンが押された時の処理
    const handlePlay = () => {
        if (isPlaying) {
            videoRef.current?.pause();
        } else {
            videoRef.current?.play();
        }
        setIsPlaying(prev => !prev);
    }
    return (
        <>
            { videoSrc === "" ? (
                <Box sx={{ 
                      backgroundColor: "rgba(128, 128, 128, 0.25)"
                    , height: height
                    , width: '100%'
                    , margin: '0 auto'  }}>
                        動画をアップロードしてください
                </Box>
            ) : (
                <Box sx={{
                    display: videoSrc === "" ? "none" : "flex",
                    flexDirection: 'column',
                }}>
                        <Box sx={{ backgroundColor: "rgba(128, 128, 128, 0.25)" }}>
                            <video
                                src={videoSrc}
                                height={height}
                                width="100%"
                                controls={false}
                                ref={videoRef}
                                style={{ maxWidth: '1000px', margin: '0 auto' }}
                            >
                                <source src={videoSrc} />
                            </video>
                        </Box>
                    <Button onClick={handlePlay} variant="contained" sx={{ p: '5px' }}>
                        {isPlaying ? "一時停止" : "再生"}
                    </Button>
                </Box>
            
            )}


        </>
    )
}