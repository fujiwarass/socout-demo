import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";
import { DisplayField } from "@/app/_component/elements/Field/DisplayField";
import { DisplayMultiField } from "@/app/_component/elements/Field/DisplayMultiField";
import { Player } from "../../types/Player";

interface PlayerInfoDispAreaProps {
    player : Player | null
}

/** 選手情報表示エリア */
export function PlayerInfoDispArea({ player } : PlayerInfoDispAreaProps) {
    const { PlayerInfoArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={2}>

                    <FormHeadLine title={PlayerInfoArea.groupTitle} />

                    <DisplayField label={PlayerInfoArea.position.label} value={player?.positions} />

                    <DisplayField label={PlayerInfoArea.height.label} value={player?.height} />

                    <DisplayField label={PlayerInfoArea.weight.label} value={player?.weight} />

                    <DisplayField label={PlayerInfoArea.dominantFoot.label} value={player?.dominant_foot_id} />

                    <DisplayMultiField label={PlayerInfoArea.selfPR.label} value={player?.self_pr} />

                    <DisplayField label={PlayerInfoArea.teamContact.label} value={player?.coach_contact} />
            </Stack>
        </>
    );
}