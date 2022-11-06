import { getAll, getSpell } from "../lib/firebase";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

// export async function getServerSideProps() {
//     const all = await getAll();
//     return { props: { all } };
// }

export default function Home(data) {
    return (
        <div>
            <button onClick={() => toast.success("hello toast!")}>
                Toast Me
            </button>
        </div>
    );
}

/*** TO DO */
/*** v1.0 */
/*
    - Auth / Profile management => User
        - Name / Email / Password ?
        - Login / Signup screen
        - Logout button
        - Delete account ?
        - Manager characters button ?
    - Character management -> Multiple characters + change active character // Class management ?
        - Select / Edit (delete) / Add mew character
        - Character => 
            - profile
                - Class (Druid only for 1.0), computed
                - NPC (free selection of spells)
            - Name, level and main stat => compute how many spells per day + DD
            - Note / comment option ? 
    - Spell slot manager
        multiple 'token' you can use to select spells - depending char 
        spell = ref to spell + use or not ?
        UI:
            use spell
            rest button
            change known spells 
    - Spell compendium => UI ? Spell per class ?
    - Pet management (pet sheet)
    - Feedback tool
*/
/*** v1.x */
/*
    - add Paladin, Ranger, Priest, Bard, Mage
    - Other ?
*/
/*** vx.x */
/*
    - GM => spellcaster party management (hp / spells)
    - Skills + Feats managements
    - Alternative lvl + extra powers management
*/
