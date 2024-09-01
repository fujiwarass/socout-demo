import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

/**
 * ラジオボタンリストのプロップス
 */
interface LadioBoxListProps {
    /**選択一覧 */
    position: string[],
    /**ラベル名 */
    label: string
}

/**
 * チェックボックス一覧
 * @param position 選択一覧
 * @param label ラベル名
 */
export function LadioBoxList({ position, label }: LadioBoxListProps) {

    return (
        <>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <RadioGroup row defaultValue="">
                    {position.map((pos,index) => (
                        <FormControlLabel key={index} value={pos} control={<Radio />} label={pos} />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    );
}