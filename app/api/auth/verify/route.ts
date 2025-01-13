import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

interface DecodedToken {
  userId: number;
  email: string;
  username: string;
}

export async function GET() {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken');

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const decoded = jwt.verify(token.value, process.env.NEXT_PUBLIC_JWT_SECRET!) as DecodedToken;
    
    const dbPath = path.join(process.cwd(), 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const user = dbData.users.find((user: { id: number }) => user.id === decoded.userId);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Remove sensitive information
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;

    return NextResponse.json({
      user: userWithoutPassword,
      verified: true
    });
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}
