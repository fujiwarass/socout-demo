import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { DateField } from "@/app/_component/elements/Inputs/DateField";
import { StringField } from "@/app/_component/elements/Inputs/StringField";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";

/** 個人情報エリア */
export function PersonalInfoArea() {
    const { PersonInfoArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={4}>
                <FormHeadLine title={PersonInfoArea.groupTitle} />
                <FormChip mustFlg={true} />
                <Stack direction="row" spacing={2}>
                    <StringField name={PersonInfoArea.sei.name} label={PersonInfoArea.sei.label} example="例：山田" />
                    <StringField name={PersonInfoArea.mei.name}  label={PersonInfoArea.mei.label} example="例：太郎" />
                </Stack>
                <FormChip mustFlg={true} />
                <DateField name={PersonInfoArea.birthDay.name}  label={PersonInfoArea.birthDay.label} />
            </Stack>
        </>
    );
}