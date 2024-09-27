import { Player } from "@/feature/player/types/Player"
import { Box } from "@mui/material";
import Image from "next/image";

/**
 * 画像表示コンポーネントProps
 */
interface DisplayImageProps {
    /**高さ */
    height: number,
    /**幅 */
    width: number,
    /**画像の説明 */
    alt: string,
    /**プレイヤー情報 */
    player: Player | null
}

/**
 * 画像表示用フィールド(1行)コンポーネント
 * @param player プレイヤー情報
 * @param height 高さ
 * @param width 幅
 * @param alt 画像の説明 
 * @returns 
 */
export function DisplayImage({ player, height, width, alt }: DisplayImageProps) {

    const url = player === null || player.profile_picture_url === "" ? "" : player?.profile_picture_url;
    return (
        <>
            {url === "" ? (
                // 画像(パス)がない場合 
                <Box sx={{ 
                    backgroundColor: "rgba(128, 128, 128, 0.25)"
                  , height: height
                  , width: width
                  , margin: '0 auto'  }}>
                      画像をアップロードしてください
              </Box>
            ) : (
                // 画像(パス)がある場合 
                <Image src={url} alt={alt} height={height} width={width} />
            )}
        </>
    )
}