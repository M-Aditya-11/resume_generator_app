import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aditya_mandavkar:1FQRtvF87FxM6pt6@hibisys-dev-cluster.vivn56e.mongodb.net/HibiSys').then(()=>console.log("DB Connected"))
}