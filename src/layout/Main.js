import { Component } from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=3a772030&s=panda")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
        // console.log(this.state.movies);
      });
  }

  searchMovie = (name, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=3a772030&s=${name}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };

  render() {
    const s = this.state;
    return (
      <div className="container content">
        <Search searchMovie={this.searchMovie} />
        {this.state.loading ? <Loader /> : <Movies movies={s.movies} />}
      </div>
    );
  }
}
