import { ISkills } from "../types/typings";

const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: ISkills = data.skills;
  console.log(skills);
  return skills;
};

export default fetchSkills;
