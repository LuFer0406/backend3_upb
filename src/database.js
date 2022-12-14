import mongoose from "mongoose";

// const uri = "mongodb://127.0.0.1:27017/dbpost";

const uri = "mongodb+srv://root:1234@cluster0.iifcrfm.mongodb.net/dbpost";

export const conectarDb = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("Base de datos conectada correctamente.", db.connection.name);
  } catch (error) {
    console.log(
      `Ha sucedido un error al conectar con la base de datos ${error.message}`
    );
  }
};
