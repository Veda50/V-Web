import useBodyClass from "../utils/bodyClass";

export default function Dev(){
    useBodyClass('bg-background');
    return(
        <>
            <section className="bg-red-600 inline-block justify-center items-center h-screen ml-1/4">
                <div>
                    <p className="text-text">
                        This page is under development.
                    </p>
                </div>
            </section>
        </>
    );
}