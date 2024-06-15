const Book_nav =()=>{
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbarcontainer">
        <div class="container-fluid">
          <a class="navbar-brand" href="/index.html">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/dashboard.html">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pages/myBook.html">My Book</a>
              </li>
              <li class="nav-item">
                <a class="nav-link "  href="/pages/bookmarks.html">Bookmark</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
}

export default Book_nav;