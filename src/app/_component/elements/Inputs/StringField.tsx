import { PlayerSchema } from "@/feature/player/schema/schema";
import { TextField } from "@mui/material";
import { Controller, FieldErrors, useFormContext } from "react-hook-form";

/**
 * 文字を入力するテキストボックスのプロップス
 */
interface StringFieldProps {
    /**name属性 */
    name: string,
    /**ラベル名 */
    label: string,
    /**入力例 */
    example: string
}

/**
 * 文字を入力するテキストボックス
 * @param name name属性
 * @param label ラベル名
 * @param example 入力例
 */
export function StringField(
    { name, label, example }: StringFieldProps
) {

    const { control, formState:{errors} } = useFormContext();
    const errorMessage = errors[name]?.message as string | undefined;
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={wrapLabel}
                    defaultValue={""}
                    fullWidth
                    margin="normal"
                    slotProps={{ inputLabel: { shrink: true } }}
                    placeholder={example}
                    error={!!errorMessage}
                    helperText={errorMessage}
                />
            )}
        >
        </Controller>
        </>
    );
}