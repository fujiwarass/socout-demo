'use client'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
 
/**
 * ボタンコンポーネント(フォーム用)Props
 */
interface ClientButtonProps {
    /** ボタン名 */
    buttonName: string,
    /** 遷移先パス */
    path:string
}

/**
 * ボタンコンポーネント(フォーム用)
 * 
 * フォーム入力画面と共に使用するボタン
 * @param buttonName ボタン名
 * @param path 遷移先パス
 * @returns 
 */
export function ClientButton({ buttonName, path }: ClientButtonProps) {
  const router = useRouter()
 
  return (
    <Button type="button" variant="contained" color="primary" onClick={() => router.push(path)}>
      {buttonName}
    </Button>
  )
}