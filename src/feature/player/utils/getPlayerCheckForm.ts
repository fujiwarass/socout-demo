import { CheckTableType } from "@/app/_component/elements/Tables/types/CheckTableType";
import { PlayerFormConst } from "../const/PlayerFormConst";
import { PlayerSchema } from "../schema/schema";

/**
 * 入力フォームのデータを確認画面用に整形する
 * @param schmea 入力データ
 * @returns 
 */
export function getPlayerCheckForm(schmea: PlayerSchema) : CheckTableType[]{
    const {PersonInfoArea, BackgroundArea, PlayerInfoArea, OtherArea} = PlayerFormConst;

    const groupedRows: CheckTableType[] = [
        /** 個人情報エリア */
        {
            groupTitle: PersonInfoArea.groupTitle,
            data: [
                {[`${PersonInfoArea.sei.label}`] : `${schmea.firstName}`},
                {[`${PersonInfoArea.mei.label}`] : `${schmea.lastName}`},
                {[`${PersonInfoArea.birthDay.label}`] : `${schmea.birthDay}`},
            ]
        },
        /** 経歴エリア */
        {
            groupTitle: BackgroundArea.groupTitle,
            data: [
                {[`${BackgroundArea.team.label}`] : `${schmea.team}`},
                {[`${BackgroundArea.pastTeam.label}`] : `${schmea.pastTeam}`},
                {[`${BackgroundArea.selectionHistory.label}`] : `${schmea.selectionHistory}`},
            ]
        },
        /** 選手情報 */
        {
            groupTitle: PlayerInfoArea.groupTitle,
            data: [
                {[`${PlayerInfoArea.position.label}`] : `${schmea.position}`},
                {[`${PlayerInfoArea.height.label}`] : `${schmea.team}`},
                {[`${PlayerInfoArea.weight.label}`] : `${schmea.pastTeam}`},
                {[`${PlayerInfoArea.dominantFoot.label}`] : `${schmea.selectionHistory}`},
                {[`${PlayerInfoArea.selfPR.label}`] : `${schmea.selfPR}`},
                {[`${PlayerInfoArea.teamContact.label}`] : `${schmea.teamContact}`},
            ]
        },
        /** その他情報 */
        {
            groupTitle: OtherArea.groupTitle,
            data: [
                {[`${OtherArea.fatherHeight.label}`] : `${schmea.fatherHeight}`},
                {[`${OtherArea.motherHeight.label}`] : `${schmea.motherHeight}`},
                {[`${OtherArea.run50m.label}`] : `${schmea.run50m}`},
            ]
        },
    ];
    return groupedRows;
}