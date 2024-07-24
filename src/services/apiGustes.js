import supabase from "./supabase";

export async function addGuste({ name, email, nationality, id }) {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ fullName: name, email, nationality, nationalID: id }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Guste could not be added");
  }
  return data;
}

export async function getLatestGuest() {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error(error);
    throw new Error("Guste could not be added");
  }

  // Return the latest guest record
  return data.length > 0 ? data[0] : null;
}
