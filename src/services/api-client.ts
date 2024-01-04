import axios from "axios";
import { ROG_KEY } from "./seqyrityKeys";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: ROG_KEY,
  },
});
