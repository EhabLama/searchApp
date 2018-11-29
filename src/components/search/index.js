const React = require("react");
const ReactDom = require("react-dom");
const SearchForm = require("./components/searchForm")
const Results = require("./components/results");
const Api = require("./api");

class App extends React.Component {
    constructor() {
        super();
        this.setQuery.bind(this);
        this.setState.bind(this);
        this.runSearch.bind(this);
    }

    componentWillMount() {
        this.setState({ q: "", data: [] });
    }

    setQuery(e) {
        this.setState({ q: e.target.value, data: this.state.data});     //save what the user types into the search field in our state
    }

    async runSearch(e) {
        e.preventDefault();     //stop the from from submitting
        const data = await Api.search(this.state.q);
        this.setState({q: this.state.q, data});     //grab the network data and set it on the state
    }

    render() {
        return (
            <div>
                <h1>Searcher</h1>
                <SearchForm
                    onSubmit={e => this.runSearch(e)}
                    onChange={e => this.setQuery(e)}
                />
                <Results results={this.state.data} />
                </div>
        );
    }
}

// adding the app to the DOM
ReactDom.render(<App />, document.getElementById("root"));
