import axios from "axios";

const apiCall = async (bodyPart: string) => {
  const options = {
    method: "GET",
    url: `https://www.exercisedb.dev/api/v1/bodyparts/${encodeURIComponent(bodyPart)}/exercises`,
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err: any) {
    console.error(err);
    return [];
  }
};

export const fetchExercisesByBodyPart = async (bodyPart: any) => {
  const response = await apiCall(bodyPart);
  return response;
};
