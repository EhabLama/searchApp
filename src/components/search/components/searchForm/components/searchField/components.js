const React = require("react");

//pure react code component
module.exports = ({ onChange }) => {
    return (
        <input type="text" placeholder="Search" name="q" onChange={onChange} />
    );
};