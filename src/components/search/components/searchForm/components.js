const React = require("react");
const SearchField = require("./components/searchField");

//pure react code, faster than a class component
module.exports = ({ onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
          <SearchField onChange={onChange} />
        </form>
    );
};