import { Chip, Typography } from "@mui/material";

/**
 * フォームチップのプロップス
 */
interface FormChipProps {
    /**　必須フラグ */
    mustFlg: boolean;
}

/**
 * フォームの見出しのプロップス
 * @param mustFlg 必須フラグ
 */
export function FormChip({ mustFlg }: FormChipProps) {
    // 必須フラグがtrueの場合、必須チップを表示 falseの場合、任意チップを表示
    const chip = mustFlg ? <Chip label="必須" color="error" sx={{ width: "50px", height: "20px" }}/> : <Chip label="任意" sx={{ width: "50px", height: "20px" }}/>
    return chip;
}