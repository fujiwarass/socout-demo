import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * 文字を入力するテキストエリアのプロップス
 */
interface StringAreaFieldProps {
    /**name属性 */
    name: string,
    /**ラベル名 */
    label: string,
    /**入力例 */
    example: string
}

/**
 * 文字を入力するテキストエリア
 * @param name name属性
 * @param label ラベル名
 * @param example 入力例
 */
export function StringAreaField(
    { name, label, example }: StringAreaFieldProps
) {
    const { control } = useFormContext();
    const wrapLabel = <div style={{ fontSize: '24px' }}>{label}</div>;
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={wrapLabel}
                        margin="normal"
                        multiline
                        slotProps={{ inputLabel: { shrink: true } }}
                        placeholder={example}
                        rows={5}
                    />
                )} >

            </Controller>

        </>
    );
}