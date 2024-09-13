import { CheckBoxList } from "@/app/_component/elements/CheckBoxs/CheckBoxList";
import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { FormatField } from "@/app/_component/elements/Inputs/FormatField";
import { NumberField } from "@/app/_component/elements/Inputs/NumberFeild";
import { StringAreaField } from "@/app/_component/elements/Inputs/StringAreaField";
import { LadioBoxList } from "@/app/_component/elements/LadioButtons/LadioButtonList";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";

/** 選手情報エリア */
export function PlayerInfoArea() {
    const { PlayerInfoArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={4}>
                    <FormHeadLine title={PlayerInfoArea.groupTitle} />

                    <FormChip mustFlg={true} />
                    <CheckBoxList 
                        name={PlayerInfoArea.position.name} 
                        label={PlayerInfoArea.position.label}  
                        position={[...['GK', 'DF', 'MF', 'FW']]} />

                    <FormChip mustFlg={true} />
                    <Stack direction="row" spacing={2}>
                        <NumberField 
                            name={PlayerInfoArea.height.name} 
                            label={PlayerInfoArea.height.label} 
                            example="999.9" unit='cm' />
                        <NumberField 
                            name={PlayerInfoArea.weight.name} 
                            label={PlayerInfoArea.weight.label} 
                            example="999.9" unit='kg' />
                    </Stack>

                    <FormChip mustFlg={true} />
                    <LadioBoxList 
                        name={PlayerInfoArea.dominantFoot.name} 
                        label={PlayerInfoArea.dominantFoot.label} 
                        position={[...['右足', '左足', '両足']]} />
                    
                    <FormChip mustFlg={true} />
                    <StringAreaField 
                        name={PlayerInfoArea.selfPR.name}
                        label={PlayerInfoArea.selfPR.label}
                        example="" />
                    
                    <FormChip mustFlg={true} />
                    <FormatField 
                        name={PlayerInfoArea.teamContact.name}
                        label={PlayerInfoArea.teamContact.label}
                        example="XXX-XXXX-XXXX" 
                        format="###-####-####" />
            </Stack>
        </>
    );
}