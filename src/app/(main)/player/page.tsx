'use client'

import { Stack } from "@mui/material";
import * as PlayerDisp from '@/feature/player/components/Index';
import { DisplayMovie } from "@/app/_component/elements/Field/DisplayMovie";
import { DisplayImage } from "@/app/_component/elements/Field/DisplayImage";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { ClientButton } from "@/app/_component/elements/Buttons/ClientButton";
import { Player } from "@/feature/player/types/Player";
import { useEffect, useState } from "react";
import { useGetPlayerProfile } from "@/feature/player/hooks/useGetPlayerProfile";

/**選手プロフィール画面 */
export default  function Page() {
    
    // TO DO 何かしらの方法でユーザーIDを取得する
    const user_id = 'aaa';

    /**
       TO DO フェッチで取得する予定
       const res = await fetch(`http://localhost:3000/api/v1/player-profile?user_id=${user_id}`
           , {
               method: 'GET',
               headers: {
                   'Cache-Control': 'no-cache',
                 },
           }
       );
       const player = await res.json() as Player;
     */
    
     const { player } = useGetPlayerProfile(user_id);

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
