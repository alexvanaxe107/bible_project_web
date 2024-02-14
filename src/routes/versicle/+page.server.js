

export async function load() {
    const versicles_server = await fetch("http://127.0.0.1:8000/chapter/1/1");

    const versicles = await versicles_server.json();

    console.log(versicles[0].books);

    return { versicles } ;
}
