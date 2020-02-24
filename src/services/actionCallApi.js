import axios from "axios";
import ENV from "../config/config.json";

export async function actionCallApi() {
  const response = await axios.get(ENV.API_ENDPOINT + "staff/profile", {
    headers: {
      "x-store": localStorage.getItem(ENV.APP_TOKEN)
    }
  });
  return response;
}
export async function actionGet(model) {
  const response = await axios.get(ENV.API_ENDPOINT + model, {
    headers: {
      "x-store": localStorage.getItem(ENV.APP_TOKEN)
    }
  });
  return response;
}
export async function actionPost(model, body) {
  const response = await axios.post(ENV.API_ENDPOINT + model, body, {
    headers: {
      "x-store": localStorage.getItem(ENV.APP_TOKEN)
    }
  });
  return response;
}
export default actionCallApi;
