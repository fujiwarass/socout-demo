import { TextField } from "@mui/material";

/**
 * 文字を入力するテキストボックスのプロップス
 */
interface StringFieldProps {
    /**ラベル名 */
    label: string,
    /**入力例 */
    example: string
}

/**
 * 文字を入力するテキストボックス
 * @param label ラベル名
 * @param example 入力例
 */
export function StringField(
    { label, example }: StringFieldProps
) {
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
            <TextField
                label={wrapLabel}
                fullWidth
                margin="normal"
                slotProps={{ inputLabel: { shrink: true } }}
                placeholder={example}
            />
        </>
    );
}