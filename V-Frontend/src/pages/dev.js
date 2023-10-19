import Navbar from "../components/navbar";
import useBodyClass from "../utils/bodyClass";

export default function Dev(){
    useBodyClass('bg-primaryBg');
    return(
        <>
            <Navbar />
            <section class="flex justify-center w-full items-center h-screen">
                <div>
                    <p class="text-smoke">
                        This page is under development.
                    </p>
                </div>
            </section>
        </>
    );
}