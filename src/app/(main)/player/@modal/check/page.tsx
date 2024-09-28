'use client'

import { CheckModal } from '@/app/_component/elements/Modals/CheckModal';

/**
 * 確認ダイアログ
 * @returns 
 */
export default function Page() {
    const okEvent = () => {
        console.log("OK")
    }
    return (
        <>
            <CheckModal title='sammple' content='aaaa' okEvent={okEvent}/>  
        </>
    );
}