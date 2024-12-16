

import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_Secret = "satish0123"

interface Idecode {
    userId: string
}


export const UserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers["authorization"];
    const decode = jwt.verify(authorization as string, JWT_Secret) as Idecode

    if (!decode) {
        res.json({
            message: "Invalid authorization/ User"
        })
        return
    }

    (req as any).userId = decode.userId 
    next()
}