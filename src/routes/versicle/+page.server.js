

export async function load() {
    const versicles = await fetch("http://127.0.0.1:8000/versicle/2");

    const versicle = await versicles.json();

    return versicle ;
}
