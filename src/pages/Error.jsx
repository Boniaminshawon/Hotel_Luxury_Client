import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="animate__animated animate__zoomIn">
            <img src="https://i.ibb.co/hXfLMyw/184996542-ilustraci-n-vectorial-isom-trica-sobre-fondo-gris-error-404-personas-junto-al-signo-de-adv.png" alt="" />
        </div>

        <div
            className="space-y-8 animate__animated animate__backInDown justify-center flex items-center flex-col">

            <h2 className="font-extrabold text-5xl">Oops!!!</h2>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <i className="text-lg font-medium">{error.statusText}</i>
            <Link to={'/'}><button className="px-4 py-2 rounded-lg text-white bg-[#25393c] text-2xl font-bold border ">Go Back Home</button></Link>
        </div>
    </div>
    );
};

export default Error;