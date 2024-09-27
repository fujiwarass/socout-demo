'use client';

import { Player } from "@/feature/player/types/Player";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import * as PlayerDisp from '@/feature/player/components/Index';
import { DisplayMovie } from "@/app/_component/elements/Field/DisplayMovie";
import { DisplayImage } from "@/app/_component/elements/Field/DisplayImage";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { ClientButton } from "@/app/_component/elements/Buttons/ClientButton";

/**選手プロフィール画面 */
export default function Page() {
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        fetch('/api/v1/player-profile')
            .then((res) => res.json())
            .then((data) => setPlayer(data))
            .catch((error) => {
                throw new Error("データ取得エラー");
            });
    }, []);

    return (
        <>        
            <Stack
                sx={{
                    width: '75%', margin: '0 auto',
                    border: '1px solid skyblue', padding: '16px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                    display: 'flex', flexDirection: 'column', gap: '16px',
                }}
            >
                <FormHeadLine title="選手プロフィール画面" />
                <DisplayMovie player={player} height={200}/>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                >
                    <DisplayImage player={player} height={200} width={200} alt="プロフィール画像" />
                    <PlayerDisp.PersonalInfoDispArea player={player}/>
                </Stack>
                <Stack direction="row" spacing={2}  sx={{ alignSelf: 'flex-end' }}>

                <ClientButton buttonName="編集画面へ" path="/player/edit"/>
                </Stack>
                <PlayerDisp.PlayerInfoDispArea player={player}/>
                <PlayerDisp.BackgroundDispArea player={player}/>
                <PlayerDisp.OtherDispArea player={player}/>
            </Stack>

        </>
    );
}
