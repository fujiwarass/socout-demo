import { InputAdornment, TextField } from "@mui/material";

/**
 * 文字を入力するテキストボックスのプロップス
 */
interface NumberFieldProps {
    /**ラベル名 */
    label: string,
    /**入力例 */
    example: string
    /**単位 */
    unit: string
}

/**
 * 数値を入力するテキストボックス
 * @param label ラベル名
 * @param example 入力例
 * @param unit 単位
 */
export function NumberField(
    { label, example,unit }: NumberFieldProps
) {
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
            <TextField
                    type='number'
                    label={wrapLabel}
                    fullWidth
                    margin="normal"
                    slotProps={{ 
                        inputLabel: { shrink: true } ,
                        input: {
                            endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                            inputProps: {
                                step: 0.1,  // step属性を追加
                            },
                        },
                    }}
                    placeholder={example}
                />
        </>
    );
}