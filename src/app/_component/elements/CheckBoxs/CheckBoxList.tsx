import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";

/**
 * チェックボックスリストのプロップス
 */
interface CheckBoxListProps {
    /**チェック一覧 */
    position: string[],
    /**ラベル名 */
    label: string
}

/**
 * チェックボックス一覧
 * @param position ポジション
 * @param label ラベル名
 */
export function CheckBoxList({ position, label }: CheckBoxListProps) {

    return (
        <>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <FormGroup row>
                    {position.map((pos) => (
                        <FormControlLabel value={pos} control={<Checkbox />} label={pos} />
                    ))}
                </FormGroup>
            </FormControl>
        </>
    );
}