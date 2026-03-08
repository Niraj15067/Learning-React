import { useRouteError } from "react-router-dom";
import noData from "../../assets/noData.png";
const Error = () => {
  const errorInfo = useRouteError();
  const { status, statusText } = errorInfo;
  return (
    <div className="invalid-path">
      <img alt="no data found" src={noData}></img>
      <h1>Something Went Wrong!!</h1>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};
export default Error;
