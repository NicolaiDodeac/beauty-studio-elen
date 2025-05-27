import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const booking = await prisma.booking.create({
      data: {
        date: new Date(body.date),
        service: body.service,
        clientName: body.clientName,
        email: body.email,
        phone: body.phone,
      },
    });
    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: 'Error creating booking' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { date: 'asc' },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching bookings' }, { status: 500 });
  }
} 