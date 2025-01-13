import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';

  /**
   * @description Handles login request. Returns a JSON response with the user data and the JWT token
   * @param {Request} request The request object
   * @returns {NextResponse} The response object
   */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password ,username } = body;

    const dbPath = path.join(process.cwd(), 'db.json');
    const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    const user = dbData.users.find(
      (u: { email: string; password: string ; username:string }) => (u.email === email  || u.username===username) && u.password === password
    );

    // console.log(user);

    if (!user) {
      return NextResponse.json(
        { error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        username: user.username,
      },
      process.env.NEXT_PUBLIC_JWT_SECRET!,
      { expiresIn: '24h' }
    );

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,

      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء تسجيل الدخول' },
      { status: 500 }
    );
  }
}
