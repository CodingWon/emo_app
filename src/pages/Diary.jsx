import { useParams } from "react-router-dom";
const Diary = () => {
  const params = useParams();
  // http://localhost:5173/diary/1
  console.log(params); // {id : '1'}
  return <div>{params.id}번 일기 입니다.</div>;
};

export default Diary;
