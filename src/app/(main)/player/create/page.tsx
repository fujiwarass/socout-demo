'use client';

import React, { useState } from 'react';
import { Button, Box, Stack } from '@mui/material';
import { FormHeadLine } from '@/app/_component/elements/HeadLines/FormHeadLine';
import { StringField } from '@/app/_component/elements/Inputs/StringField';
import { DateField } from '@/app/_component/elements/Inputs/DateField';
import { StringAreaField } from '@/app/_component/elements/Inputs/StringAreaField';
import { CheckBoxList } from '@/app/_component/elements/CheckBoxs/CheckBoxList';
import { NumberField } from '@/app/_component/elements/Inputs/NumberFeild';
import { LadioBoxList } from '@/app/_component/elements/LadioButtons/LadioButtonList';
import { UploadImageFeild } from '@/app/_component/elements/Inputs/UploadImageFeild';
import { UploadMovieFeild } from '@/app/_component/elements/Inputs/UploadMovieField';
import { FormatField } from '@/app/_component/elements/Inputs/FormatField';

export default function Page() {

    return (
        <>
            <Box sx={{
                display: 'flex',
                margin: '0 auto',
                textAlign: 'center',
                width: '50%',
                pb: '16px',
            }}>
                <FormHeadLine title="選手プロフィール登録画面" />
            </Box>

            <Box sx={{
                width: '50%',
                margin: '0 auto',
                border: '1px solid skyblue',
                padding: '16px',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
            }}>

                {/* 個人情報 */}
                <Stack direction="column" spacing={4}>
                    <FormHeadLine title="個人情報" />
                    <Stack direction="row" spacing={2}>
                        <StringField label="姓" example="例：山田" />
                        <StringField label="名" example="例：太郎" />
                    </Stack>
                    <DateField label="生年月日" />

                </Stack>
                {/* 経歴 */}
                <Stack direction="column" spacing={4}>
                    <FormHeadLine title="経歴" />
                    <StringField label="現所属チーム" example="例：～所属" />
                    <StringAreaField label="過去所属チーム" example="例： XXXX年YY月~XXXX年YY月 ～所属" />
                    <StringAreaField label="選抜歴" example="例： XXXX年YY月~XXXX年YY月 ～選抜選出" />

                </Stack>
                {/* 選手情報 */}
                <Stack direction="column" spacing={4}>
                    <FormHeadLine title="選手情報" />
                    <CheckBoxList label='ポジション(複数選択可)' position={[...['GK', 'DF', 'MF', 'FW']]} />
                    <Stack direction="row" spacing={2}>
                        <NumberField label="身長" example="999.9" unit='cm' />
                        <NumberField label="体重" example="999.9" unit='kg' />
                    </Stack>
                    <LadioBoxList label='利き足' position={[...['右足', '左足', '両足']]} />
                    <StringAreaField label="自己PR" example="" />
                    <FormatField label="所属チーム監督連絡先" example="XXX-XXXX-XXXX" format="###-####-####" />
                </Stack>
                <Stack direction="column" spacing={4}>
                    <FormHeadLine title="その他情報" />
                    <NumberField label="父親の身長" example="999.9" unit='cm' />
                    <NumberField label="母親の身長" example="999.9" unit='cm' />
                    <NumberField label="50m走" example="99.9" unit='秒' />
                </Stack>
                <Button type="submit" variant="contained" color="primary" sx={{ alignSelf: 'flex-end' }}>
                    確認画面へ
                </Button>
            </Box>
        </>

    );
}