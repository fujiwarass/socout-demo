import { PlayerJson } from "@/demo/Json";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    console.log(request,"GETPlayer");
    /**
     * 下記のような処理が入る予定
     * const data = await fetch('https://api.vercel.app/blog')
       const PlayerJson = await data.json()
     */
    return NextResponse.json(
      PlayerJson
    );
}
