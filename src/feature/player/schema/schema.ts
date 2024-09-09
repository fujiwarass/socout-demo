import { ErrorMessage } from '@/const/ErrorMessage';
import { z } from 'zod';

export const playerSchema = z.object({
    /********************** 個人情報 ********************/
    /**苗字 */
    firstName: z.string()
        .min(1, { message: "入力必須です" })
        .max(20, { message: ErrorMessage.max(20) }),
    /**名前 */
    lastName: z.string()
        .min(1, { message: ErrorMessage.required })
        .max(20, { message: ErrorMessage.max(20) }),
    /**生年月日 */
    birthDay: z.string().min(1, { message: ErrorMessage.required })
        .refine(value => {
            const date = new Date(value);

            // 日付が無効な場合、`getTime()` が `NaN` を返すので、それをチェック
            return !isNaN(date.getTime());
        }, { message: ErrorMessage.date }),
    /********************** 経歴 **********************/
    /**現所属チーム */
    team: z.string().min(1, { message: ErrorMessage.required })
        .max(20, { message: ErrorMessage.max(20) }),

    /**過去所属チーム */
    pastTeam: z.string().min(1, { message: ErrorMessage.required })
        .max(255, { message: ErrorMessage.max(225) }),

    /**選抜歴 */
    selectionHistory: z.string().min(1, { message: ErrorMessage.required })
        .max(255, { message: ErrorMessage.max(225) }),

    /********************** 選手情報 **********************/
    /**ポジション */
    position: z.array(z.string().min(1, { message: ErrorMessage.required }))
        .nonempty({ message: ErrorMessage.required }),

    /**身長 */
    height: z.string().min(1, { message: ErrorMessage.required })
        .regex(/^\d{1,3}(\.\d)?$/, { message: ErrorMessage.double(3, 1) }),

    /**体重 */
    weight: z.string().min(1, { message: ErrorMessage.required })
        .regex(/^\d{1,3}(\.\d)?$/, { message: ErrorMessage.double(3, 1) }),

    /**利き足 */
    dominantFoot: z.string().min(1, { message: ErrorMessage.required }),

    /**自己PR */
    selfPR: z.string().min(1, { message: ErrorMessage.required })
        .max(255, { message: ErrorMessage.max(255) }),

    /**所属チーム監督連絡先 */
    teamContact: z.string().min(1, { message: ErrorMessage.required })
        .regex(/^(0[789]0)-[0-9]{4}-[0-9]{4}$/, { message: ErrorMessage.tellphone }),

    /********************** その他情報 **********************/
    /**父親の身長 */
    fatherHeight: z.string()
        .refine(value => {
            // 空文字の場合はバリデーションを通す(任意のため)
            if (value === '') return true;

            const pattan = /^\d{1,3}(\.\d)?$/;
            if (pattan.test(value)) {
                return true;
            } else {
                return false;
            }
        }, { message: ErrorMessage.double(3, 1) }),

    /**母親の身長 */
    motherHeight: z.string().refine(value => {
        // 空文字の場合はバリデーションを通す(任意のため)
        if (value === '') return true;

        const pattan = /^\d{1,3}(\.\d)?$/;
        if (pattan.test(value)) {
            return true;
        } else {
            return false;
        }
    }, { message: ErrorMessage.double(3, 1) }),

    /**50m走タイム */
    run50m: z.string().refine(value => {
        // 空文字の場合はバリデーションを通す(任意のため)
        if (value === '') return true;

        const pattan = /^\d{1,3}(\.\d)?$/;
        if (pattan.test(value)) {
            return true;
        } else {
            return false;
        }
    }, { message: ErrorMessage.double(3, 1) }),
});

export type PlayerSchema = z.infer<typeof playerSchema>;