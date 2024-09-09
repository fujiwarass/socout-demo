'use client';

import { useFormContext } from "react-hook-form";

export default function Page() {
    const { getValues } = useFormContext();
    const values = getValues();
    const check = () => {
        console.log(values);
    }
    console.log(values);
    return (
        <>
            <div>確認画面へ</div>
            {check}
        </>
    );
}