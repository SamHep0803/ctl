import useSWR from "swr";
import { ApiResponse, UserProfile } from "../src/Interfaces/User";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    user: data.user || null,
  };
};

export const useUser = (): UserProfile => {
  const { data, error } = useSWR("/api/user", fetcher);
  const user = data?.user;
  return error ? null : user;
};

export const getUser = async (accessToken: string) => {
  try {
    const response = await fetch(`${process.env.VATSIM_URL}/api/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
    if (response.status === 200) {
      const { data } = (await response.json()) as ApiResponse;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};
