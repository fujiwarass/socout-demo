import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { StringAreaField } from "@/app/_component/elements/Inputs/StringAreaField";
import { StringField } from "@/app/_component/elements/Inputs/StringField";
import { Stack } from "@mui/material";

/** 経歴エリア */
export function BackgroundArea() {
    return (
        <>
            <Stack direction="column" spacing={4}>
                    <FormChip mustFlg={true} />
                    <FormHeadLine title="経歴" />
                    <FormChip mustFlg={true} />
                    <StringField label="現所属チーム" example="例：～所属" />
                    <FormChip mustFlg={true} />
                    <StringAreaField label="過去所属チーム" example="例： XXXX年YY月~XXXX年YY月 ～所属" />
                    <FormChip mustFlg={true} />
                    <StringAreaField label="選抜歴" example="例： XXXX年YY月~XXXX年YY月 ～選抜選出" />
            </Stack>
        </>
    );
}