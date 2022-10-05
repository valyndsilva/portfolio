import { IContact } from "../types/typings";

const fetchContact = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`);
  const data = await res.json();
  const contact: IContact = data.contact;
  console.log(contact);
  return contact;
};

export default fetchContact;
