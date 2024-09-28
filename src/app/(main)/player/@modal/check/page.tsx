'use client'

import { CheckModal } from '@/app/_component/elements/Modals/CheckModal';

/**
 * 確認ダイアログ
 * @returns 
 */
export default function Page() {
    const okEvent = async () => {
        console.log("OK")
    }
    return (
        <>
            <CheckModal title='確認' okEvent={okEvent}>
                <div style={{ textAlign: 'center' }}>変更内容を反映してもよろしいでしょうか</div>
            </CheckModal>
        </>
    );
}