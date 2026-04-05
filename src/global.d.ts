// This file is used to declare global variables 
// and types that can be accessed throughout the project without needing to import them in every file.
import { Connection } from "mongoose"

declare global {
    var mongooseConn : {
        conn : Connection | null ,
        promise : Promise<Connection> | null
    }
}

export {} ;