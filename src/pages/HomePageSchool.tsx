import { NavLink } from "react-router-dom";
import { GreatBlueButton, GreatOrangeButton } from "../components/Button/CustomButton";


export const HomePageSchool = () => {
    return (
        <>
            <nav>
                <section className="flex justify-center mt-5 mb-4 z-50 h-12 lg:h-16">
                    <img src="./public/logo.png" alt="eduka" />
                </section>
                <h3 className="flex justify-center">Établissement scolaire XXXXX</h3>
            </nav>
            <div className="flex flex-col items-center justify-center mt-44 gap-10">
                <h2 className="text-xl font-semibold">Que souhaitez-vous faire ?</h2>
                <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
                    <NavLink
                        to="/SchoolCreateUser">
                        <GreatBlueButton>Créer un profil</GreatBlueButton>
                    </NavLink>
                    <GreatOrangeButton>
                        Modifier un profil
                    </GreatOrangeButton>
                </div>
            </div>
        </>
    );
}