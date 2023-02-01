import bcrypt from "bcryptjs";
import { Request,Response,NextFunction } from "express";
import { ERROR_MESSAGE } from "../../constants/error.constant";
import { UserModel } from "../../models";
const changePasswordControllers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const {email,oldPassword,newPassword,confirmPassword} = req.body
   try {
    const user=await UserModel.findOne({email:email})
    
    if(!user){
        return next(ERROR_MESSAGE.NOT_FOUND);
    }
   const comparePassword= await bcrypt.compare(oldPassword,user.password) 
    if(comparePassword && newPassword===confirmPassword){
        const newHashPassword=await bcrypt.hash(newPassword,10)
    const result = await UserModel.findOneAndUpdate(
        { email: req.body.email },
        { $set: { password: newHashPassword } }
      );
      res.send({message:'password changed successfully',statusCode:200})
    }
    else{
        return next(ERROR_MESSAGE.NOT_FOUND);
    }
    
   } catch (error) {
     throw error
   }
  };
  export default changePasswordControllers;
  