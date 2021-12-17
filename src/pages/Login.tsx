import { useEffect, useState } from "react";
import { client } from "utils/api";

export default function Login() {
  const [temp, setTemp] = useState();

  const fetch = async () => {
    const data: any = client.get("/contact");
    setTemp(data);
  };
  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    console.log(temp);
  }, [temp]);
  return <div>Login</div>;
}
