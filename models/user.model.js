import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String, //define o tipo de dado que será recebido
    required: true, //diz se é obrigatório ou não
    unique: true, //se é único ou não
    trim: true, //corta os espaços vazios caso eles existam no inicio e no fim da string
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm, //regex passando uma conferência
  },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" }, //enum significa que pode ser um ou outro o valor
  createdAt: { type: Date, default: Date.now() }, //criando uma data com o método Date.now
  tabsId: [{ type: Schema.Types.ObjectId, ref: "Tab" }],
  tabsLiked: [{ type: Schema.Types.ObjectId, ref: "Tab" }],
  tabsFavorited: [{ type: Schema.Types.ObjectId, ref: "Tab" }],
});

export const UserModel = model("User", userSchema);
