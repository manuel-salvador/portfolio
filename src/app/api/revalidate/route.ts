import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    revalidatePath('/');
    revalidatePath('/projects');
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error revalidating' },
      { status: 500 },
    );
  }
}
