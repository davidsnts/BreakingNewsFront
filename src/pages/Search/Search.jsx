import { useParams } from "react-router-dom";

export function Search() {
  const { title } = useParams();
  
  
  return  title;
}
