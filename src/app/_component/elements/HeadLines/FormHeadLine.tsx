import { Typography } from "@mui/material";

/**
 * フォームの見出しのプロップス
 */
interface FormHeadLineProps {
    /**見出しの値 */
    title: string;
}

/**
 * フォームの見出し
 * @param title 見出しの値
 * @returns 
 */
export function FormHeadLine({ title }: FormHeadLineProps) {
    return (
        <>
            <Typography
                variant="h5"
                style={{
                    color: 'black',
                    borderBottom: '3px solid skyblue',
                    paddingTop: '16px',
                }}
            >
                {title}
            </Typography>
        </>
    );
}