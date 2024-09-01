import { TextField } from "@mui/material";

/**
 * 日付を入力するテキストボックスのプロップス
 */
interface DateFieldProps {
    /**ラベル名 */
    label: string,
}

/**
 * 日付を入力するテキストボックス
 * @param label ラベル名
 */
export function DateField(
    { label }: DateFieldProps
) {
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
            <TextField label={wrapLabel}
                type='date'
                margin="normal"
                slotProps={{ inputLabel: { shrink: true } }} >
            </TextField>
        </>
    );
}