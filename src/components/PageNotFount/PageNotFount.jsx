import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <h1 className="page-not-found-heading">
        Unnnn! Page Not Found - 404
      </h1>
      <p className="page-not-found-text">
        We're working on it. Be patient!
      </p>
      <button
        onClick={() => window.history.back()}
        className="page-not-found-button"
      >
        <span className="back-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon"
          >
            <path d="M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z"></path>
          </svg>
        </span>
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
