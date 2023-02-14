import url from "./url";

export const indexLoader = async () => {
    const response = await fetch(url + "/note")
    const notes = await response.json()
    return notes
}