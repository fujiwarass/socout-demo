'use client';

import { ClientButton } from "@/app/_component/elements/Buttons/ClientButton";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { UploadImageFeild } from "@/app/_component/elements/Inputs/UploadImageFeild";
import { UploadMovieFeild } from "@/app/_component/elements/Inputs/UploadMovieField";
import { Stack } from "@mui/material";

export default function Page() {

    const heigth: number = 250;
    const width: number = 250;
    return (
        <>
            <Stack direction="column" spacing={3}
                sx={{ display: 'flex', margin: '0 auto', textAlign: 'center', width: '50%', pb: '16px', }}>
                <FormHeadLine title="選手プロフィールアップロード画面" />

                <UploadImageFeild buttonName="アップロード画像" imageTitle="画像をアップロードしてください" height={heigth} width={width} />

                <UploadMovieFeild buttonName="プレイ動画" movieTitle="動画をアップロードしてください" height={heigth} width={width} />

                <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                    <ClientButton buttonName="スキップする" path="/player" />
                    <ClientButton buttonName="アップロードする" path="/player" />
                </Stack>
            </Stack>
        </>
    );
}