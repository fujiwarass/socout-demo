import { FormControl, Input, InputLabel } from "@mui/material";

/**
 * 表示用のフィールド(1行)Props
 */
interface DisplayFieldProps {
    /**ラベル名 */
    label: string,
    /**値 */
    value: any
}

/**
 * テキスト表示用フィールド(1行)コンポーネント
 * @param label ラベル名
 * @param value 値
 */
export function DisplayField(
    { label,value }: DisplayFieldProps
) {
    return (
        <>
            <FormControl fullWidth >
                <InputLabel style={{ fontSize: '14px', color: 'skyblue' }} shrink>{label}</InputLabel>
                <Input
                    disabled // 入力不可
                    value={value} // 値
                    sx={{ 
                        '&:before': {
                            borderBottomColor: 'blue', // 下線の色
                        }
                    }}
                />
            </FormControl>

        </>
    );
}