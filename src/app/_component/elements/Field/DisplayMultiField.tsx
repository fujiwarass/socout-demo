import { FormControl, Input, InputLabel } from "@mui/material";

/**
 * 表示用のフィールド(複数行)Props
 */
interface DisplayMultiFieldProps {
    /**ラベル名 */
    label: string,
    /**値 */
    value: any
}

/**
 * テキスト表示用フィールド(複数行)コンポーネント
 * @param label ラベル名
 * @param value 値
 */
export function DisplayMultiField(
    { label,value }: DisplayMultiFieldProps
) {
    return (
        <>
            <FormControl fullWidth >
                <InputLabel style={{ fontSize: '14px', color: 'skyblue' }} shrink>{label}</InputLabel>
                <Input
                    disabled // 入力不可
                    value={value} // 値
                    rows={5} // 行数
                    multiline // 複数行
                    sx={{
                        '&:before': {
                            borderBottomColor: 'blue',　// 下線の色
                        }
                    }}
                />
            </FormControl>

        </>
    );
}