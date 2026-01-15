import axios from "axios";

export const getTotalBlogs = async () => {
  const res = await axios.get("/blogs.json");
  return res.data.length;
};

export const getTotalContacts = async () => {
  const res = await axios.get("/contacts.json");
  return res.data.length;
};
