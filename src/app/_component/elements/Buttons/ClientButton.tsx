import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
 
interface ClientButtonProps {
    buttonName: string,
    path:string
}

export function ClientButton({ buttonName, path }: ClientButtonProps) {
  const router = useRouter()
 
  return (
    <Button type="button" variant="contained" color="primary" onClick={() => router.push(path)}>
      {buttonName}
    </Button>
  )
}