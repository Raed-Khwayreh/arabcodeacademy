import { NextResponse } from 'next/server';

/**
 * Handles logout request. Returns a JSON response with a success message and a 200 status code
 * after deleting the accessToken and currentUser cookies. If an error occurs, it returns a JSON
 * response with an error message and a 500 status code.
 */
export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    );

    response.cookies.delete('accessToken');
    response.cookies.delete('currentUser');

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}
