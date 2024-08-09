import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICore extends Document {
  name: string;
  category: string;
  type: string;
  item: string;
}
