import { connectDb } from "@/libs/db";
import User from "@/model/User";
import { NextResponse } from "next/server";

interface ExpectedUserRequest {
  name: string;
  email: string;
  password: string;
}
interface ExpectedUserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}
type ResponseType = {
  user?: ExpectedUserResponse;
  error?: string;
};

type FinalResponse = NextResponse<ResponseType>;

export const POST = async (req: Request): Promise<FinalResponse> => {
  const body = (await req.json()) as ExpectedUserRequest;

  connectDb();
  try {
    const isTaken = await User.findOne({ email: body.email });

    if (isTaken) {
      return NextResponse.json(
        { error: "email already exists" },
        { status: 401 }
      );
    }
    
    const newUser = await User.create({ ...body });
    return NextResponse.json(
      {
        user: {
          id: newUser._id.toString(),
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    throw error;
  }
};
