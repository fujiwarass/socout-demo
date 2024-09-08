import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * ラジオボタンリストのプロップス
 */
interface LadioBoxListProps {
    /**name属性 */
    name: string,
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
export function LadioBoxList({ name, position, label }: LadioBoxListProps) {

    const { control } = useFormContext();

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControl>
                        <FormLabel>{label}</FormLabel>
                        <RadioGroup row>
                            {position.map((pos, index) => (
                                <FormControlLabel
                                    {...field}
                                    key={index}
                                    value={pos}
                                    control={<Radio />}
                                    label={pos} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                )} >

            </Controller>

        </>
    );
}