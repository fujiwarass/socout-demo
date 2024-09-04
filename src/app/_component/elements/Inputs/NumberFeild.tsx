import { InputAdornment, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format"
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
    { label, example, unit }: NumberFieldProps
) {
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
            <NumericFormat 
                decimalScale={1} // 小数点以下の桁数
                decimalSeparator="." // 小数点の文字
                fixedDecimalScale // 小数点以下の桁数を固定
                allowNegative={false} // マイナス値の入力を許可
                customInput={TextField} // テキストフィールドを指定
                label={wrapLabel} // ラベル名
                slotProps={{
                     inputLabel: { shrink: true },
                     input: {   
                        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                     },
                }} // ラベルの設定
                placeholder={example} // 入力例
                
            />
        </>
    );
}