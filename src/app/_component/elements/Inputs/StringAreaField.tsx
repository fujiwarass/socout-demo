import { TextField } from "@mui/material";

/**
 * 文字を入力するテキストエリアのプロップス
 */
interface StringAreaFieldProps {
    /**ラベル名 */
    label: string,
    /**入力例 */
    example: string
}

/**
 * 文字を入力するテキストエリア
 * @param label ラベル名
 * @param example 入力例
 */
export function StringAreaField(
    { label, example }: StringAreaFieldProps
) {
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
            <TextField
                label={wrapLabel}
                margin="normal"
                multiline
                slotProps={{ inputLabel: { shrink: true } }}
                placeholder={example}
                rows={5}
            />
        </>
    );
}