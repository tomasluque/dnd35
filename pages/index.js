import { getAll, getSpell } from "../lib/firebase";

export async function getServerSideProps() {
    const res = await getAll();
    const test = await getSpell("Alarme");
    return { props: { res, test } };
}

export default function Home(data) {
    console.log(data.test);
    return <div className="text-2xl">This is a test YO</div>;
}
