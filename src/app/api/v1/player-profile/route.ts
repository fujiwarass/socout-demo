import { PlayerJson } from "@/demo/Json";
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    return Response.json(PlayerJson);
}