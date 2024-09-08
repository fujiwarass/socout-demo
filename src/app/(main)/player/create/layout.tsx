"use client";

import { FormProvider, useForm } from "react-hook-form";

export default function PlayerCreateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const controls = useForm();
    return (
        <>
            <FormProvider {...controls}>
                {children}
            </FormProvider>
        </>
    );
}