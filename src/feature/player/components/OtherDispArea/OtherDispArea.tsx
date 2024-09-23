import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";
import { DisplayField } from "@/app/_component/elements/Field/DisplayField";
import { Player } from "../../types/Player";

interface OtherDispAreaProps {
    player : Player | null
}

/** 個人情報表示エリア */
export function OtherDispArea({player} : OtherDispAreaProps) {
    const { OtherArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={2}>

                    <FormHeadLine title={OtherArea.groupTitle} />

                    <DisplayField label={OtherArea.fatherHeight.label} value={player?.father_height}/>

                    <DisplayField label={OtherArea.motherHeight.label} value={player?.mother_height}/>

                    <DisplayField label={OtherArea.run50m.label} value={player?.fifty_meter_time}/>
            </Stack>
        </>
    );
}