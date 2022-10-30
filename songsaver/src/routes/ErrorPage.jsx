
import { Link, useRouteError } from "react-router-dom"
import '../css/errorPage.css'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <div>
                <h1>Sorry, dit is een niet bestaande pagina..</h1>
                <p>we raden je aan om terug te gaan naar de <Link to={"/"}>homepagina</Link>.<br />Geen zorgen je songs zijn er nog :-)</p>
                <p>
                    <i>Errormelding: {error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}