import { FormControl, Input, InputLabel } from "@mui/material";

interface DisplayFieldProps {
    /**ラベル名 */
    label: string,
    /**値 */
    value: any
}

export function DisplayField(
    { label,value }: DisplayFieldProps
) {
    return (
        <>
            <FormControl fullWidth >
                <InputLabel style={{ fontSize: '14px', color: 'skyblue' }} shrink>{label}</InputLabel>
                <Input
                    disabled
                    value={value}
                    sx={{
                        '&:before': {
                            borderBottomColor: 'blue',
                        }
                    }}
                />
            </FormControl>

        </>
    );
}