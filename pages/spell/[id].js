import { getSpell } from "@lib/firebase";

export async function getServerSideProps({ query }) {
    const { id } = query;
    const spell = await getSpell(id);

    return {
        props: { spell },
    };
}

function loopLevel(array) {
    let data = [];
    for (const [key, value] of Object.entries(array)) {
        data.push(`${key} ${value}`);
    }
    return data.sort().join(", ");
}

export default function Spell({ spell }) {
    return (
        <main className="px-6 py-8">
            <div className="prose prose-slate">
                <h1 className="mb-0 text-center">{spell.name}</h1>
                <p className="lead mt-0 text-center">
                    {spell.school}
                    {spell.subschool ? ` (${spell.subschool})` : ""}
                    {spell.descriptor ? ` [${spell.descriptor}]` : ""}
                </p>

                <table>
                    <tbody>
                        {spell.level && (
                            <tr>
                                <td>
                                    <code>Niveau</code>
                                </td>
                                <td>{loopLevel(spell.level)}</td>
                            </tr>
                        )}
                        {spell.components && (
                            <tr>
                                <td>
                                    <code>Composantes</code>
                                </td>
                                <td>{spell.components.join(", ")}</td>
                            </tr>
                        )}
                        {spell.casting && (
                            <tr>
                                <td>
                                    <code>Incantation</code>
                                </td>
                                <td>{spell.casting}</td>
                            </tr>
                        )}
                        {spell.range && (
                            <tr>
                                <td>
                                    <code>Portée</code>
                                </td>
                                <td>{spell.range}</td>
                            </tr>
                        )}
                        {spell.target && (
                            <tr>
                                <td>
                                    <code>Cible</code>
                                </td>
                                <td>{spell.target}</td>
                            </tr>
                        )}
                        {spell.duration && (
                            <tr>
                                <td>
                                    <code>Durée</code>
                                </td>
                                <td>{spell.duration}</td>
                            </tr>
                        )}
                        {spell.saving && (
                            <tr>
                                <td>
                                    <code>Résistance</code>
                                </td>
                                <td>{spell.saving}</td>
                            </tr>
                        )}
                        {spell.resistance && (
                            <tr>
                                <td>
                                    <code>Sauvegarde</code>
                                </td>
                                <td>{spell.resistance}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <p className="rounded border-2 border-slate-300 bg-white p-3 indent-4 shadow-lg first-letter:text-lg">
                    {spell.description}
                </p>
            </div>
        </main>
    );
}
