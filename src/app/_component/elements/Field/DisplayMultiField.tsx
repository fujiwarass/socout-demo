import { FormControl, Input, InputLabel } from "@mui/material";

interface DisplayMultiFieldProps {
    /**ラベル名 */
    label: string,
    /**値 */
    value: any
}

export function DisplayMultiField(
    { label,value }: DisplayMultiFieldProps
) {
    return (
        <>
            <FormControl fullWidth >
                <InputLabel style={{ fontSize: '14px', color: 'skyblue' }} shrink>{label}</InputLabel>
                <Input
                    disabled
                    value={value}
                    rows={5}
                    multiline
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