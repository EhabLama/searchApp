//useful practice
//gather all the network calls in one place to avoid putting too much logic inside the component
//>diffrent components want to use diffrent network requests

const search = async q => {
    const res = await fetch(`http://localhost:3000/search?q=${q}`);
    const json = await res.json();
    return json;
};

const _search = search;
export { _search as search };