const React = require("react");
const Result = require("./components/result");


//pure react code
module.exports = ({ results }) => {
    return (
        <ul>
            {results.map((r, i) => <Result key={i}>{r}</Result>)}
        </ul>
    );
};