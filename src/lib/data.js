"use server";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";





export const deleteProductById = async (id) => {
  try {
    connectToDb();
    const product = await Product.findByIdAndDelete(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }
};



export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
