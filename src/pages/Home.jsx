import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  // http://localhost:5173/?value=hello
  console.log(params); // {URLSearchParams {...}
  console.log(params.get("value")); //hello
  return <>Home</>;
};

export default Home;
