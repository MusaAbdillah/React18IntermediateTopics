import { useLocation, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(params);
  console.log(searchParams.toString());
  console.log(location);
  return <p>User {params["id"]}</p>;
};

export default UserDetailPage;
