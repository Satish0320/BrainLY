import express from "express";
import jwt from "jsonwebtoken"
import z, { number, string } from "zod"
import bcrypt from "bcrypt"
import { content_model, Iuser, link_model, user_model } from "../DataBase/DB";
import { UserMiddleware } from "../middleware/user_Middleware";
import { random } from "../Utils/utils";
const JWT_Secret = "satish0123"

const UserRouter = express.Router();


UserRouter.post("/Signup",async (req,res)=>{
    
    const reqbody = z.object({
        username: z.string(),
        password: z.string()
    })

    const validatebody = reqbody.safeParse(req.body);

    if (!validatebody.success) {
        res.json({
            message: "Invalid Inputs"
        })
        return
    }

    const {username, password} = req.body;

    const hashpassword = await bcrypt.hash(password,5);

    const user: Iuser = await user_model.create({
        username: username,
        password: hashpassword
    })

    res.json({
        message: "user created . you are ready to signin",
        username: user.username
    })
})


UserRouter.post("/Signin", async (req,res)=>{

    const reqbody = z.object({
        username: z.string(),
        password: z.string()
    })

    const validatebody = reqbody.safeParse(req.body);

    if (!validatebody.success){
        res.json({
            message: "Invalid Inputs"
        })
        return;
    } 

    const {username , password} = req.body;

    const finduser = await user_model.findOne({
        username: username
    })
    //  console.log(finduser);
     
    if (!finduser) {
        res.json({
            message: "Invalid username"
        })
        return;
    }

    const validpassword = await bcrypt.compare(password, finduser.password)

    if (!validpassword) {
        res.json({
            message: "Invalid password"
        })
        return
    }
    
    const payload = {userId: finduser._id}
    if (validpassword) {
        const Token = jwt.sign(payload, JWT_Secret);
        
    res.json({
        token: Token,
        Welcome: finduser.username
    })
    }
})


UserRouter.post("/content",UserMiddleware,async (req, res)=>{

    const reqbody = z.object({
        link: z.string(),
        type: z.string(),
        title: z.string(),
        tag: z.string(),
        UserId: z.string()
    })

    const validatebody = reqbody.safeParse(req.body);

    if (!validatebody) {
        res.json({
            message: "Invalid Inputs"
        })
        return
    }

    const{link, type, title, tags} = req.body;
    // const UserId = req.userId

    const content = await content_model.create({
        link: link,
        type: type,
        tags: tags,
        title: title,
        UserId: req.userId
    })
    // console.log(content);
    
    res.json({
        messgae: "content created",
        content: content
    })
})

UserRouter.get("/contents", UserMiddleware,async (req, res)=>{

    const UserId = req.userId;

    const contents =await content_model.find({
        UserId: UserId
    }).populate("UserId", "username")

    res.json({
        contents
    })    
})

UserRouter.delete("/delete", UserMiddleware,async (req, res)=>{
    const contentId = req.body.contentId;

    await content_model.deleteOne({
        _id: contentId,
        // UserId: req.userId
    })
    res.json({
        message: "content deleted"
    })
})

UserRouter.post("/brain/share", UserMiddleware,async (req, res)=>{
    const {share} = req.body;

    if (share) {
        const existUser = await link_model.findOne({
            UserId: req.userId
        })

        if (existUser) {
            res.json({
                Hash : existUser.hash
            })
            return;
        }


       const Hash = await link_model.create({
            hash: random(10),
            UserId: req.userId            
        })

        res.json({
            Hash: Hash
        })
    }else{
        await link_model.deleteOne({
            UserId: req.userId
        })

        res.json({
            message:"Removed link"
        })
    }
})


UserRouter.get("/brain/share/:sharelink", async (req,res)=>{
    const hash = req.params.sharelink

    const link = await link_model.findOne({
        hash: hash
    })
        // console.log(link);
        
    if (!link) {
        res.json({
            message:"invalid hash"
        })
        return
    }

    const content = await content_model.findOne({
        UserId: link.UserId
    }).populate("UserId", "username")
    // console.log(content);
    
    res.json({
        content,
        link
    })

})

export {UserRouter}