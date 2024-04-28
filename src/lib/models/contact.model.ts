import mongoose, { Schema, Document, Model } from "mongoose";
import { ContactInfo } from "@/types/contact";

export interface ContactDocument extends ContactInfo, Document {}

const contactSchema: Schema<ContactDocument> = new Schema<ContactDocument>(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    query: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ContactModel: Model<ContactDocument> =
  mongoose.models["query"] ||
  mongoose.model<ContactDocument>("query", contactSchema);
