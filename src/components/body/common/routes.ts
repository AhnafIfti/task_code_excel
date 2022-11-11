import Axios from "axios";

export const ApiRoutes = {
    mostEmailed: 'https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=RZx0MUg2zyOE0ijEGAHp5P2ctcVbgTFz'
}

export async function GetMostEmailedNews() {
  const result = await Axios.get(ApiRoutes.mostEmailed);
  console.log("+++++++++++++",result)
  return result;
}