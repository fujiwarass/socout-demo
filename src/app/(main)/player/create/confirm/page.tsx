'use client';

import { ClientButton } from "@/app/_component/elements/Buttons/ClientButton";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { CheckTable } from "@/app/_component/elements/Tables/CheckTable";
import { CheckTableType } from "@/app/_component/elements/Tables/types/CheckTableType";
import { PlayerSchema } from "@/feature/player/schema/schema";
import { getPlayerCheckForm } from "@/feature/player/utils/getPlayerCheckForm";
import { Box, Stack } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function Page() {
    const { getValues } = useFormContext();
    const values = getValues() as PlayerSchema;
    console.log(values, "入力データ");
    const groupedRows: CheckTableType[] = getPlayerCheckForm(values);

    return (
        <>
            <Stack direction="column" spacing={3}
                sx={{ display: 'flex', margin: '0 auto', textAlign: 'center', width: '50%', pb: '16px', }}>

                <FormHeadLine title="選手プロフィール登録確認画面" />

                <CheckTable CheckFieldGroupList={groupedRows} />

                <Stack direction="row" spacing={2}>
                    <ClientButton buttonName="修正する" path="/player/create" />
                    <ClientButton buttonName="登録する" path="/player/create/media" />
                </Stack>
            </Stack>
        </>
    );
}