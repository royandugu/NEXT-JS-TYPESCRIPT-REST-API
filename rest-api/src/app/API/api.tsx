//main dependency
require("dotenv");

//secondary dependency
const connect=require("./Connector/connector");

const API = async (): Promise<{ success: boolean }> => {
    try {
      await connect(process.env.MONGO_URI);
      return { success: true };
    } catch (err) {
      console.error("Failed to start the API", err);
      return { success: false };
    }
  };

export default API;