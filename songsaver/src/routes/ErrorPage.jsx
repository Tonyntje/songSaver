
import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    <>
        <h1>Sorry, dit is een niet bestaande pagina..</h1>
        <p>we raden je aan om terug te gaan naar de <Link to={"/"}>homepagina</Link>.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </>
}