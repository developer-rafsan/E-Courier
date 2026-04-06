import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Full name is required"],
            trim: true,
            minlength: 3,
            maxlength: 60
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema);