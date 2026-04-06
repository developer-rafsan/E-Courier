import customError from "../utils/customError.js";
// import bcrypt from "bcrypt";
import User from "../models/user.model.js";
// import Merchant from "../models/merchant.model.js";
// import Delivery from "../models/delivery.model.js";
// import Pickup from "../models/pickup.model.js";

export const userRegistration = async (req, res, next) => {
    try {           

        const { fullName, email } = req.body;
        

    } catch (error) {
        console.log(error);
        
        return next(customError())
    }
};