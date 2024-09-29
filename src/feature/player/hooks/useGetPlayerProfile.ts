import { use, useEffect, useState } from "react";
import { Player } from "../types/Player";

export function useGetPlayerProfile(user_id: string) {
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        const getPlayerProfile = async () => {
            const res = await fetch(
                `/api/v1/player-profile?user_id=${user_id}`
                ,{method: 'GET'}
            )

            const player = await res.json() as Player;
            setPlayer(player);
        }
        getPlayerProfile();
    }, []);
    return { player };
}