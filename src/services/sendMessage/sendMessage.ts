import axios from "axios";

const API = "http://127.0.0.1:8000";

export const sendMessage = async (msg: string) => {
  const params_api = `${API}/api/v1/send_message`;

  try {
    const res = await axios.post(params_api, {
      text: msg,
    });

    return res?.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
