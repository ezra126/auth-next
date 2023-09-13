import {connect} from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest,NextResponse} from "next/server";
import { sendEmail } from "@/helper/mailer";


connect()

export async function POST(request : NextRequest){
  try{
     const reqBody = await request.json();
     const {email} = reqBody;

     const user = await User.findOne({email})

     if(!user){
        NextResponse.json({error: "User does not exist"}, {status: 400})
     }
    
     await sendEmail({email, emailType: "RESET", userId: user._id})


  }
  catch(error: any){
     return NextResponse.json({error: error.message}, {status: 500})
  }
}