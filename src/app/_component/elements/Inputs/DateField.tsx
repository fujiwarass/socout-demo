import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * 日付を入力するテキストボックスのプロップス
 */
interface DateFieldProps {
    /**name属性 */
    name: string,
    /**ラベル名 */
    label: string,
}

/**
 * 日付を入力するテキストボックス
 * @param name name属性
 * @param label ラベル名
 */
export function DateField(
    { name, label }: DateFieldProps
) {
    const { control, formState:{errors} } = useFormContext();
    const errorMessage = errors[name]?.message as string | undefined;
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
                        type='date'
                        margin="normal"
                        slotProps={{ inputLabel: { shrink: true } }} 
                        error={!!errorMessage}
                        helperText={errorMessage}
                        >
                    </TextField>
                )}
            >
            </Controller>
        </>
    );
}