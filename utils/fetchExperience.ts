import { IExperience } from "../types/typings";

const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );
  const data = await res.json();
  const experience: IExperience = data.experience;
  console.log(experience);
  return experience;
};

export default fetchExperience;