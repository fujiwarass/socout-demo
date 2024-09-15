import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { CheckTableType } from "./types/CheckTableType";

interface CheckTableProps {
    CheckFieldGroupList: CheckTableType[],
}

/**
 * 入力内容確認用のテーブル
 * @param param0 
 * @returns 
 */
export function CheckTable({ CheckFieldGroupList }: CheckTableProps) {
    return (
        <>
            <TableContainer>
                <Table>
                    <TableBody>
                        {CheckFieldGroupList.map((group, index) => {
                            return (
                                <>
                                    {/**見出し */}
                                    <TableRow key={index}>
                                        <TableCell
                                            rowSpan={group.data.length + 1}
                                            sx={{
                                                borderBottom: '0.5px solid silver',
                                                borderTop: index === 0 ? '1px solid silver' : '',
                                                backgroundColor: 'skyblue',
                                                color: 'black'
                                            }} >{group.groupTitle}</TableCell>
                                    </TableRow>
                                    {group.data.map((data, index) => {
                                        return (
                                            <TableRow key={index}>
                                                {/**入力項目名 */}
                                                <TableCell
                                                    sx={{
                                                        borderBottom: '0.5px solid silver',
                                                        borderTop: index === 0 ? '1px solid silver' : '',
                                                        backgroundColor: 'gray',
                                                        color: 'white'
                                                    }}>{Object.keys(data)}
                                                </TableCell>
                                                {/**入力値 */}
                                                <TableCell
                                                    sx={{
                                                        borderBottom: '0.5px solid silver',
                                                        borderTop: index === 0 ? '1px solid silver' : '',
                                                    }}>{Object.values(data)}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}