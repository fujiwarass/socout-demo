import { InputAdornment, TextField } from "@mui/material";
import { NumericFormat, PatternFormat } from "react-number-format"
/**
 * 文字を入力するテキストボックスのプロップス
 */
interface FormatFieldProps {
    /**ラベル名 */
    label: string,
    /**入力例 */
    example: string
    /**フォーマット */
    format: string
}

/**
 * 数値を入力するテキストボックス
 * @param label ラベル名
 * @param example 入力例
 * @param format フォーマット(#でパターン文字を定義)
 */
export function FormatField(
    { label, example, format }: FormatFieldProps
) {
    const wrapLabel = <div style={{fontSize: '24px'}}>{label}</div>;
    return (
        <>
            <PatternFormat 
                format={format} // パターン
                customInput={TextField} // テキストフィールドを指定
                label={wrapLabel} // ラベル名
                slotProps={{ inputLabel: { shrink: true },}} // ラベルの設定
                placeholder={example} // 入力例
                
            />
        </>
    );
}