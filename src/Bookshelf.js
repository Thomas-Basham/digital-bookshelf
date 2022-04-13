import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import UpdateModal from "./UpdateModal";
import { withAuth0 } from "@auth0/auth0-react";
import { Carousel } from "react-bootstrap";
import bookshelf from "./imgs/bookshelf.jpeg";

// import axios from 'axios';
import UpdateButton from "./UpdateButton";

// let SERVER = process.env.REACT_APP_SERVER;

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBook: {},
      books: [],
      userName: null,
      email: this.props.auth0.user.email,
      showUpdateForm: false,
    };
  }
  getBooks = async () => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let books = await axios.get(url);
      this.setState({
        books: books.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter((book) => book._id !== id);
      this.setState({
        books: updatedBooks,
      });
    } catch (error) {
      console.log("we have an error:", error.response.data);
    }
  };

  updateForm = () => {
    this.setState({
      showUpdateForm: true,
    });
  };

  hideUpdateForm = () => {
    this.setState({
      showUpdateForm: false,
    });
  };

  updateBook = async (updatedBook) => {
    try {
      let id = updatedBook._id;
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      let rebornBook = await axios.put(url, updatedBook);
      let newBooks = this.state.books.map((book) => {
        return book._id === updatedBook._id ? rebornBook.data : book;
      });
      this.setState({
        books: newBooks,
      });
    } catch (error) {
      console.log("we have an error:", error.response.data);
    }
  };

  bookForUpdate = (book) => {
    this.setState({
      currentBook: book,
    });
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state);
    let books = this.state.books.map((book, idx) => {
      return book.email === this.props.auth0.user.email ? (
        <Carousel.Item 
        style={{
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
        key={idx}
        >
          <img
            className=""
            src={bookshelf}
            height="600px"
            width="100%"
            alt="First slide"
          />

          <Carousel.Caption
            className="bg-secondary text-white"
            style={{
              textAlign: "center",
              width: "80 vw",
              opacity: 0.9,
              borderRadius: 10,
              padding: 9,
              marginBottom: 17,
              margin: "0 auto"

            }}
          >
            <h4
              style={{
                overflow: "auto",
              }}
            >
              {book.title}
            </h4>

            <p>{book.author}</p>

            <p
              className="overflow-auto"
              style={{
                position: "relative",
                left: " 10%",
                top: " 10%",
                height: "30vh",
                width: "80%",
                background: "white",
                color: "black",
                padding: 10,
              }}
            >
              {book.description}
            </p>

            <a
              style={{ marginBlock: "1vh" }}
              className="btn btn-outline-info"
              href={book.canonicalVolumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              View on Google Books™
            </a>

            <div>
              <UpdateButton
                style={{ marginBlock: "1vh" }}
                updateForm={this.updateForm}
                book={book}
                currentBook={this.state.book}
                bookForUpdate={this.bookForUpdate}
              />

              {book.status ? <p>🧑‍🏫  Have Read 🧑‍🏫</p> : <p>🚫  Haven't Read yet 🚫</p>}
            </div>
          </Carousel.Caption>

          <UpdateModal
            books={this.state.books}
            show={this.state.showUpdateForm}
            onHide={this.hideUpdateForm}
            updateBook={this.updateBook}
            book={book}
            currentBook={this.state.currentBook}
          />
        </Carousel.Item>
      ) : (
        " Add some books!"
      );
    });

    return (
      <>
        {this.state.books.length > 0 ? (
          <Carousel style={{
            marginTop: 0,
            marginBottom: "2vh"
          }}> {books}</Carousel>
        ) : (
          <h3> No Books Found </h3>
        )}
      </>
    );
  }
}

export default withAuth0(Bookshelf);
