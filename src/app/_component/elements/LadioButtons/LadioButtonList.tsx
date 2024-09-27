import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material";
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

    const { control, formState:{errors} } = useFormContext();
    const errorMessage = errors[name]?.message as string | undefined;

    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControl error={!!errorMessage}>
                        <FormLabel>{label}</FormLabel>
                        {/* プロップスから受け取った選択一覧をラジオボタンとして展開する */}
                        <RadioGroup row>
                            {position.map((pos, index) => (
                                <FormControlLabel
                                    {...field}
                                    key={index}
                                    value={pos}
                                    control={<Radio />}
                                    label={pos} 
                                    />
                            ))}
                        </RadioGroup>
                        <FormHelperText>{errorMessage}</FormHelperText>
                    </FormControl>
                )} >

            </Controller>

        </>
    );
}