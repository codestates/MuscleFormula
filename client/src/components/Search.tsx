/**검색창**/
import styled from "styled-components"

const SearchBar = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem;
  width: 80vw;
  max-width: 350px;
  border-bottom: 2px solid black;
  > input {
    display: flex;
    align-items: flex-end;
    width: 100%;
    border: none;
    font-size: 18px;
  }
  > input:focus {
    outline: none;
  }
  > img {
    display: flex;
    align-items: flex-end;
    width: 30px;
    margin-left: auto;
  }
`
export default function Search() {
  return (
    <SearchBar>
      <input type="text" placeholder="검색어를 입력하세요"/>
      <img src={require("../images/icon_search.png")} alt='search'/>
    </SearchBar>
  )
}