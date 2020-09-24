export const getPoetry = async() => {
    // TODO feedback:可以把url抽出来
    const response =  await fetch("https://v1.jinrishici.com/all.json");
    const data = await response.json();
    return [data.origin, data.author, data.content]
}
