const searchField = document.querySelector(".search-field");

if (searchField) {
  const opener = document.querySelector(".search-field-opener");

  if (opener) {
    const closer = searchField.querySelector(".search-field-closer");

    const onClickOpenSearchField = () => {
      searchField.classList.add("expanded");

      opener.removeEventListener("click", onClickOpenSearchField);
      closer.addEventListener("click", onClickCloseSearchField);
    };

    const onClickCloseSearchField = () => {
      searchField.classList.remove("expanded");

      opener.addEventListener("click", onClickOpenSearchField);
      closer.removeEventListener("click", onClickCloseSearchField);
    };

    opener.addEventListener("click", onClickOpenSearchField);
  }
}
