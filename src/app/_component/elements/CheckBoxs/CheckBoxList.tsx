import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * チェックボックスリストのプロップス
 */
interface CheckBoxListProps {
    /**name属性 */
    name: string,
    /**チェック一覧 */
    position: string[],
    /**ラベル名 */
    label: string
}

/**
 * チェックボックス一覧
 * @param name name属性
 * @param position ポジション
 * @param label ラベル名
 */
export function CheckBoxList({ name, position, label }: CheckBoxListProps) {

    const { control, formState:{errors} } = useFormContext();
    const errorMessage = errors[name]?.message as string | undefined;

    // チェックボックスの変更イベント
    const handleCheckboxChange = (pos: string, field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
        // チェックボックスの値を取得 (配列でない場合は空配列)
        const newValue = Array.isArray(field.value) ? field.value : [];
        if (e.target.checked) {
            // チェックされた場合は項目を追加
            field.onChange([...newValue, pos]);
        } else {
            // チェックが外れた場合は項目を削除
            field.onChange(newValue.filter((item: string) => item !== pos));
        }
    };
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControl error={!!errorMessage}>
                        <FormLabel>{label}</FormLabel>
                        <FormGroup row>
                            {position.map((pos, index) => (
                                <FormControlLabel {...field}
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={Array.isArray(field.value) && field.value.includes(pos)} // チェックされているか(配列の場合は含まれているか)
                                            onChange={handleCheckboxChange(pos, field)}
                                        />
                                    }
                                    label={pos} />
                            ))}

                        </FormGroup>
                        <FormHelperText>{errorMessage}</FormHelperText>
                    </FormControl>
                )}
            >

            </Controller>
        </>
    );
}