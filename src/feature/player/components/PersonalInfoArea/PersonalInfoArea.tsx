import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { DateField } from "@/app/_component/elements/Inputs/DateField";
import { StringField } from "@/app/_component/elements/Inputs/StringField";
import { Stack } from "@mui/material";

/** 個人情報エリア */
export function PersonalInfoArea() {
    return (
        <>
            <Stack direction="column" spacing={4}>
                <FormHeadLine title="個人情報" />
                <FormChip mustFlg={true} />
                <Stack direction="row" spacing={2}>
                    <StringField name={"firstName"} label="姓" example="例：山田" />
                    <StringField name={"lastName"}  label="名" example="例：太郎" />
                </Stack>
                <FormChip mustFlg={true} />
                <DateField name={"birthDay"}  label="生年月日" />
            </Stack>
        </>
    );
}