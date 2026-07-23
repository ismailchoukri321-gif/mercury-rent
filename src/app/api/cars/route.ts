import { NextResponse } from "next/server";
import { cars } from "@/lib/cars";
export async function GET() { return NextResponse.json(cars); }
