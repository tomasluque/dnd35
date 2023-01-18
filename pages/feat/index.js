import Link from "next/link";
import { getAllFeats } from "@lib/firebase";

export async function getServerSideProps() {
    const feats = await getAllFeats();
    return {
        props: { feats },
    };
}

function renderFeatList(feats) {
    return feats.map((feat) => (
        <Link
            href={{
                pathname: "/feat/[id]",
                query: { id: feat.id },
            }}
        >
            <div
                className="flex flex-col rounded border-2 border-slate-300 p-3 text-slate-800 shadow-lg hover:bg-sky-100"
                key={feat.id}
            >
                <div className="font-bold text-slate-600 underline">
                    {feat.name}
                </div>
                <div className="text-xs italic">{feat.description}</div>
            </div>
        </Link>
    ));
}

export default function FeatIndex({ feats }) {
    return (
        <main className="">
            <div className="prose prose-slate border-b-2 py-5">
                <h1 className="text-center">Dons</h1>
            </div>
            <div className="m-5 flex flex-col space-y-4 prose-a:no-underline">
                {renderFeatList(feats)}
            </div>
        </main>
    );
}

// to do :

/* 

Add "filtering" :

1/ reload page with query arg => 'lvl=1', 'school=invocation', etc.

2/ have 'renderSpells' methods => noArg=All or arg=level. Multiple args ? No, just lvl

*/
