import { IPortfolio } from "../types/typings";

const fetchPortfolio = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPortfolio`
  );
  const data = await res.json();
  const portfolio: IPortfolio = data.portfolio;
  console.log(portfolio);
  return portfolio;
};

export default fetchPortfolio;
