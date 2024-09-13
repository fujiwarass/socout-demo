import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { NumberField } from "@/app/_component/elements/Inputs/NumberFeild";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";

/** その他情報エリア */
export function OtherArea() {
    const { OtherArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={4}>
                <FormHeadLine title="その他情報" />
                <FormChip mustFlg={false} />
                <NumberField 
                        name={OtherArea.fatherHeight.name} 
                        label={OtherArea.fatherHeight.label} 
                    example="999.9" unit='cm' />

                <FormChip mustFlg={false} />
                <NumberField 
                    name={OtherArea.motherHeight.name} 
                    label={OtherArea.motherHeight.label} 
                    example="999.9" unit='cm' />
                
                <FormChip mustFlg={false} />
                <NumberField 
                    name={OtherArea.run50m.name} 
                    label={OtherArea.run50m.label}  
                    example="99.9" unit='秒' />
            </Stack>
        </>
    );
}