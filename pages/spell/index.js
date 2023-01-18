import Link from "next/link";
import { useState } from "react";
import { getAllSpells } from "@lib/firebase";

export async function getServerSideProps() {
    const spells = await getAllSpells();
    return {
        props: { spells },
    };
}

function loopLevel(array) {
    let data = [];
    for (const [key, value] of Object.entries(array)) {
        data.push(`${key} ${value}`);
    }
    return data.sort().join(", ");
}

function renderSpellList(spells, level = "all", available = "all") {
    return spells.map((spell) => (
        <Link
            key={spell.id}
            href={{
                pathname: "/spell/[id]",
                query: { id: spell.id },
            }}
        >
            <div
                className="flex flex-col rounded border-2 border-slate-300 p-3 text-slate-800 shadow-lg hover:bg-sky-100"
                key={spell.id}
            >
                <div className="font-bold text-slate-600 underline">
                    {spell.name}
                </div>
                <div className="text-sm text-slate-400">
                    {spell.school}
                    {spell.subschool ? ` (${spell.subschool})` : ""}
                    {spell.descriptor ? ` [${spell.descriptor}]` : ""}
                </div>
                <div className="mt-1 text-xs italic text-slate-500">
                    {loopLevel(spell.level)}
                </div>
                <div className="mt-3 text-xs italic">{spell.slug}</div>
            </div>
        </Link>
    ));
}

export default function SpellIndex({ spells }) {
    const [lvlFilter, setLvlFilter] = useState("all");
    const [classFilter, setClassFilter] = useState("all");

    return (
        <main className="">
            <div className="prose prose-slate border-b-2 py-5">
                <h1 className="text-center">Sorts</h1>
            </div>
            <div className="prose prose-slate border-b-2 py-5">
                <div className="flex items-center justify-center">
                    <p className="">Filter by:</p>
                    <div className="flex">
                        <div className="flex h-8 w-8 items-center justify-center border p-2">
                            1
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center border p-2">
                            2
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center border p-2">
                            3
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-5 flex flex-col space-y-4 prose-a:no-underline">
                {renderSpellList(spells, lvlFilter, classFilter)}
            </div>
        </main>
    );
}

/* 
    To do :
        set filters :
            add components to render filters

*/
