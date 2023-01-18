import { getFeat } from "@lib/firebase";

export async function getServerSideProps({ query }) {
    const { id } = query;
    const feat = await getFeat(id);

    return {
        props: { feat },
    };
}

export default function Feat({ feat }) {
    return (
        <main className="px-6 py-8">
            <div className="prose prose-slate">
                {feat.name && <h1 className="mb-0 text-center">{feat.name}</h1>}
                {feat.type && (
                    <p className="lead mt-0 text-center">[{feat.type}]</p>
                )}

                {feat.description && (
                    <div className="prose-sm">
                        <p className="lead">{feat.description}</p>
                    </div>
                )}
                <div className="prose-sm mt-5">
                    {feat.prerequisites && (
                        <p className="indent-4">
                            <strong>Conditions.</strong> {feat.prerequisites}
                        </p>
                    )}
                    {feat.benefit && (
                        <p className="indent-4">
                            <strong>Avantages.</strong> {feat.benefit}
                        </p>
                    )}
                    {feat.normal && (
                        <p className="indent-4">
                            <strong>Normal.</strong> {feat.normal}
                        </p>
                    )}
                    {feat.special && (
                        <p className="indent-4">
                            <strong>Spécial.</strong> {feat.special}
                        </p>
                    )}
                    {feat.other && <p className="indent-4">{feat.other}</p>}
                </div>
            </div>
        </main>
    );
}
