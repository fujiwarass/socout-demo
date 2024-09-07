import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { NumberField } from "@/app/_component/elements/Inputs/NumberFeild";
import { Stack } from "@mui/material";

/** その他情報エリア */
export function OtherArea() {
    return (
        <>
            <Stack direction="column" spacing={4}>
                <FormHeadLine title="その他情報" />
                <FormChip mustFlg={false} />
                <NumberField label="父親の身長" example="999.9" unit='cm' />
                <FormChip mustFlg={false} />
                <NumberField label="母親の身長" example="999.9" unit='cm' />
                <FormChip mustFlg={false} />
                <NumberField label="50m走" example="99.9" unit='秒' />
            </Stack>
        </>
    );
}