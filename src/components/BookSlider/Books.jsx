import React from "react";
import Book1 from "../../assets/books/book1.png";
import Book2 from "../../assets/books/book2.png";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Sherlock Holmes",
    rating: 5.0,
    author: "Arthur Conan Doyle",
  },
  {
    id: 2,
    img: Book2,
    title: "Crime and Punishment",
    rating: 4.5,
    author: "Fyodor",
  },
  {
    id: 3,
    img: Book3,
    title: "Harry Potter",
    rating: 4.7,
    author: "J.K Rowling",
  },
  {
    id: 4,
    img: Book4,
    title: "Classic stories of Christie",
    rating: 4.4,
    author: "Agatha Christie",
  },
  {
    id: 5,
    img: Book5,
    title: "Poirot Investigates",
    rating: 4.5,
    author: "Agatha Christie",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
