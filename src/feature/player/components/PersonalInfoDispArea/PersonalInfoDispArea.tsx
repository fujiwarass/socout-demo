import { FormHeadLine } from "@/app/_component/elements/HeadLines/FormHeadLine";
import { Stack } from "@mui/material";
import { PlayerFormConst } from "../../const/PlayerFormConst";
import { DisplayField } from "@/app/_component/elements/Field/DisplayField";
import { Player } from "../../types/Player";

interface PersonalInfoDispAreaProps {
    player : Player | null
}

/** 個人情報表示エリア */
export function PersonalInfoDispArea({ player } : PersonalInfoDispAreaProps) {
    const { PersonInfoArea } = PlayerFormConst;
    return (
        <>
            <Stack direction="column" spacing={2} sx={{width: "100%"}}>
                
                <Stack direction="row" spacing={2}>
                    <DisplayField label={PersonInfoArea.sei.label} value={player?.player_first_name}/>
                    <DisplayField label={PersonInfoArea.mei.label} value={player?.player_last_name} />
                </Stack>
                <DisplayField label={PersonInfoArea.birthDay.label} value={player?.birth_date}  />
                <DisplayField label={"年齢"} value={player?.age}  />
            </Stack>
        </>
    );
}