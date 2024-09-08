'use client';

import React, { useState } from 'react';
import { Button, Box, Stack } from '@mui/material';
import { FormHeadLine } from '@/app/_component/elements/HeadLines/FormHeadLine';
import * as Player from '@/feature/player/components/Index';
import { useForm, SubmitHandler, FormProvider, FieldValues, useFormContext } from "react-hook-form";
import { useRouter } from 'next/navigation';

export default function Page() {

    const router = useRouter();
    const {handleSubmit} = useFormContext();
    const onSubmit  = (data: any) => {
        console.log("確認データ",data);
        router.push('/player/create/confirm');
    };

    return (
        <>
            <Box sx={{ display: 'flex', margin: '0 auto', textAlign: 'center', width: '50%', pb: '16px', }}>
                <FormHeadLine title="選手プロフィール登録画面" />
            </Box>
                <Box
                    component={'form'}
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        width: '50%', margin: '0 auto',
                        border: '1px solid skyblue', padding: '16px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                        display: 'flex', flexDirection: 'column', gap: '16px',
                    }}>

                    {/* 個人情報 */}
                    <Player.PersonalInfoArea />
                    {/* 経歴 */}
                    <Player.BackgroundArea />
                    {/* 選手情報 */}
                    <Player.PlayerInfoArea />
                    {/* その他情報 */}
                    <Player.OtherArea />
                    <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'flex-end' }}>
                        確認画面へ
                    </Button>
                </Box>

        </>

    );
}