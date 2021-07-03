import { useEffect, useState } from "react";

export default function useToken() {
  const [userJwt, setUserJwt] = useState<null | string>(
    localStorage.getItem("jwtToken")
  );

  useEffect(() => {
    if (userJwt !== null) {
      localStorage.setItem("jwtToken", userJwt);
    }
  }, [userJwt]);

  return { userJwt, setUserJwt };
}
