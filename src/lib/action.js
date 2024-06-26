"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addProduct = async (formData) => {
  const { name, desc, img, type, category, price, slug } = Object.fromEntries(formData);
  console.log("category" + category)
  try {
    connectToDb();
    const newProduct = new Product({
      name,
      desc,
      img,
      type,
      category,
      price,
      slug,
    });

    await newProduct.save();
    console.log("saved to db");
    revalidatePath("/admin");
    revalidatePath("/plants");
    revalidatePath("/accessories");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const updateProduct = async (formData) => {
  const { id, name, desc, img, type, category, price, slug } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    console.log(id);
    await Product.findByIdAndUpdate(id, {
      name: name,
      desc: desc,
      img: img,
      type: type,
      category: category,
      price: price,
      slug: slug,
    });
    console.log("updated to db");
    revalidatePath("/admin");
    revalidatePath("/plants");
    revalidatePath("/accessories");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const getProducts = async () => {
  try {
    connectToDb();
    const plants = await Product.find();
    return plants;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Plants!");
  }
};

export const getProduct = async (slug) => {
  try {
    connectToDb();
    console.log(slug);
    const product = await Product.findOne({ slug: slug });
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  console.log(id);
  try {
    connectToDb();

    await Product.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
    revalidatePath("/plants");
    revalidatePath("/accessories");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const getPlants = async () => {
  try {
    connectToDb();
    const plants = await Product.find({ type: "plant" });
    return plants;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Plants!");
  }
};

export const getAccessories = async () => {
  try {
    connectToDb();
    const accessories = await Product.find({ type: "accessory" });
    return accessories;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Plants!");
  }
};

export const handleLogout = async () => {
  //"use server"
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password , redirectTo: "/" });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }

    throw err;
  }
};
