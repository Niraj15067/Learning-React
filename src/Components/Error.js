import { useRouteError } from "react-router-dom";
const Error = () => {
  const errorInfo = useRouteError();
  const { status, statusText } = errorInfo;
  return (
    <div>
      <h1>Something Went Wrong!!</h1>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};
export default Error;
