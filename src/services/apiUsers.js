import supabase from "./supabase";

export const addUser = async ({ name, email, photo }) => {
  const { data, error } = await supabase
    .from("users")
    .insert([{ userName: name, email: email, userPhoto: photo }]);

  if (error) {
    console.error("Error adding user:", error);
    return null;
  }
  return data;
};

export const getUsers = async () => {
  let { data: users, error } = await supabase.from("users").select("*");
  if (error) {
    console.error("Error adding user:", error);
    return null;
  }
  return users;
};

export const deleteUser = async (userId) => {
  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("id", userId);
  if (error) {
    console.error("Error adding user:", error);
    return null;
  }
  return data;
};
