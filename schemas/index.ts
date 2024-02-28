import * as z from "zod";

const regExp = /^((8|\+7|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

export const BriefSchema = z.object({
  name: z.string().min(1, { message: "Имя должно быть" }),
  phone: z.string().regex(regExp, { message: "Неверный формат телефона" }),
});
