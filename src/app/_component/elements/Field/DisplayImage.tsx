import { Player } from "@/feature/player/types/Player"
import { Box } from "@mui/material";
import Image from "next/image";

interface DisplayImageProps {
    /**高さ */
    height: number,
    /**幅 */
    width: number,
    /**初期値 */
    alt: string,
    /**プレイヤー情報 */
    player: Player | null
}

export function DisplayImage({ player, height, width, alt }: DisplayImageProps) {

    const url = player === null || player.profile_picture_url === "" ? "" : player?.profile_picture_url;
    return (
        <>
            {url === "" ? (
                <Box sx={{ 
                    backgroundColor: "rgba(128, 128, 128, 0.25)"
                  , height: height
                  , width: width
                  , margin: '0 auto'  }}>
                      画像をアップロードしてください
              </Box>
            ) : (
                <Image src={url} alt={alt} height={height} width={width} />
            )}
        </>
    )
}