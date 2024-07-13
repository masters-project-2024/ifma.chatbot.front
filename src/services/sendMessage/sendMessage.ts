import axios from "axios";

export const sendMessage = async (msg: string) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/send_message/", {
      text: msg,
    });

    return res?.data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
