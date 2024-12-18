import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p> Sory, an unexpected error has ocurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
