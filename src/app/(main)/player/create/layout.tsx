"use client";

import { PlayerSchema, playerSchema } from "@/feature/player/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function PlayerCreateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const controls = useForm<PlayerSchema>({
        defaultValues: {
            firstName: '',
            lastName: '',
            birthDay: '',
            team: '',
            pastTeam: '',
            selectionHistory: '',
            position: [],
            height: '',
            weight: '',
            dominantFoot: '',
            selfPR: '',
            teamContact: '',
            fatherHeight: '',
            motherHeight: '',
            run50m: '',
        },
        mode: 'onSubmit', // 初回のみバリデーション
        reValidateMode: 'onChange', // 入力値が変わるたびにバリデーション
        resolver: zodResolver(playerSchema),
    });
    return (
        <>
            <FormProvider {...controls}>
                {children}
            </FormProvider>
        </>
    );
}