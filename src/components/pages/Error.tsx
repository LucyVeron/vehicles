import { useRouteError } from "react-router";

function Error() {
  const error: any = useRouteError();

  return (
    <div className="Error" style={{ textAlign: "center" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
}

export default Error;
