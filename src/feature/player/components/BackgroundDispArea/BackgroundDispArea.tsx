import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";
import { DisplayField } from "@/app/_component/elements/Field/DisplayField";
import { DisplayMultiField } from "@/app/_component/elements/Field/DisplayMultiField";
import { Player } from "../../types/Player";

interface BackgroundDispAreaProps {
    player : Player | null
}

/** 経歴表示エリア */
export function BackgroundDispArea({player} : BackgroundDispAreaProps) {
    const { BackgroundArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={2}>

                    <FormHeadLine title={BackgroundArea.groupTitle} />

                    <DisplayField label={BackgroundArea.team.label} value={player?.now_team_name}/>

                    <DisplayMultiField label={BackgroundArea.pastTeam.label} value={player?.past_team_names}/>

                    <DisplayMultiField label={BackgroundArea.selectionHistory.label} value={player?.selection_history}/>
            </Stack>
        </>
    );
}