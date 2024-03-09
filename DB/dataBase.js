

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // No need to specify path if the .env file is in the root directory

const DataBaseConnection = () => {
    mongoose.connect(process.env.DBURL)
        .then(() => {
            console.log("Database connected");
        })
        .catch((error) => {
            console.error("Error connecting to database:", error);
        });
};

export default DataBaseConnection;
