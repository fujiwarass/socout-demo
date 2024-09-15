import { FormChip } from "@/app/_component/elements/Chips/FormChip";
import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { StringAreaField } from "@/app/_component/elements/Inputs/StringAreaField";
import { StringField } from "@/app/_component/elements/Inputs/StringField";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";

/** 経歴エリア */
export function BackgroundArea() {
    const { BackgroundArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={4}>

                    <FormHeadLine title={BackgroundArea.groupTitle} />

                    <FormChip mustFlg={true} />
                    <StringField 
                        name={BackgroundArea.team.name} 
                        label={BackgroundArea.team.label} 
                        example="例：～所属" />

                    <FormChip mustFlg={true} />
                    <StringAreaField 
                        name={BackgroundArea.pastTeam.name} 
                        label={BackgroundArea.pastTeam.label}  
                        example="例： XXXX年YY月~XXXX年YY月 ～所属" />

                    <FormChip mustFlg={true} />
                    <StringAreaField 
                        name={BackgroundArea.selectionHistory.name}  
                        label={BackgroundArea.selectionHistory.label} 
                        example="例： XXXX年YY月~XXXX年YY月 ～選抜選出" />
            </Stack>
        </>
    );
}