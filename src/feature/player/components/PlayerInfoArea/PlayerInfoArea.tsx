import { CheckBoxList } from "@/app/_component/elements/CheckBoxs/CheckBoxList";
import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { FormatField } from "@/app/_component/elements/Inputs/FormatField";
import { NumberField } from "@/app/_component/elements/Inputs/NumberFeild";
import { StringAreaField } from "@/app/_component/elements/Inputs/StringAreaField";
import { LadioBoxList } from "@/app/_component/elements/LadioButtons/LadioButtonList";
import { Stack } from "@mui/material";

/** 選手情報エリア */
export function PlayerInfoArea() {
    return (
        <>
            <Stack direction="column" spacing={4}>
                    <FormChip mustFlg={true} />
                    <FormHeadLine title="選手情報" />
                    <FormChip mustFlg={true} />
                    <CheckBoxList label='ポジション(複数選択可)' position={[...['GK', 'DF', 'MF', 'FW']]} />
                    <FormChip mustFlg={true} />
                    <Stack direction="row" spacing={2}>
                        <NumberField label="身長" example="999.9" unit='cm' />
                        <NumberField label="体重" example="999.9" unit='kg' />
                    </Stack>
                    <FormChip mustFlg={true} />
                    <LadioBoxList label='利き足' position={[...['右足', '左足', '両足']]} />
                    <FormChip mustFlg={true} />
                    <StringAreaField label="自己PR" example="" />
                    <FormChip mustFlg={true} />
                    <FormatField label="所属チーム監督連絡先" example="XXX-XXXX-XXXX" format="###-####-####" />
            </Stack>
        </>
    );
}