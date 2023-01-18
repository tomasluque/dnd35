import toast from "react-hot-toast";
import Loader from "@components/Loader";
import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <div>
                <button onClick={() => toast.success("hello toast!")}>
                    Toast Me
                </button>
            </div>
        </main>
    );
}

// Sky & Amber & Slate

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
