import { InputAdornment, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat, PatternFormat } from "react-number-format"
/**
 * 数値を入力するテキストボックス
 */
interface FormatFieldProps {
    /**name属性 */
    name: string,
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
    { name, label, example, format }: FormatFieldProps
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
                    <PatternFormat
                        {...field} // フィールド
                        format={format} // パターン
                        customInput={TextField} // テキストフィールドを指定
                        label={wrapLabel} // ラベル名
                        slotProps={{ inputLabel: { shrink: true }, }} // ラベルの設定
                        placeholder={example} // 入力例
                        error={!!errorMessage}
                        helperText={errorMessage}
                    />
                )}
            ></Controller>

        </>
    );
}