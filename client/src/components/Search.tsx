/**검색창**/
import { useState, useEffect } from "react";
import styled, { StyledComponentBase } from "styled-components";
interface InputContainerType extends StyledComponentBase<any, {}> {
  hasText?: any;
}
interface DropDownType {
  options: any;
  handleDropDownClick: any;
  selected: any;
}
interface SearchType {
  posts: any;
  setshowPosts: any;
}

const AllpostDataDumy = [
  {
    postTitle: "수정제목23",
    bodyPart: "상체",
    created_At: "2022-04-04T15:00:00.000Z",
    difficult: 3,
    info: "ㅇㅇㅇ",
    postId: 6,
    postImage: "http://localhost:4000/postimg/certificate-g4944fe35c_1920.png",
    totalTime: 9,
    total_Likes: 1,
    total_comments: 1,
  },
];

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const activeBorderRadius = "1rem 1rem 0 0";
const inactiveBorderRadius = "1rem 1rem 1rem 1rem";

export const InputContainer: InputContainerType = styled.div`
  /* margin-top: 8rem; */
  background-color: #ffffff;
  width: 17.5rem;
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${(props: any) =>
    props.hasText ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;
  box-shadow: ${(props: any) => (props.hasText ? boxShadow : 0)};

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > img {
    display: flex;
    align-items: flex-end;
    width: 25px;
    margin-left: auto;
    margin-right: 0.5rem;
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;

    &:hover {
      background-color: #eee;
    }

    &.selected {
      background-color: #ebe5f9;
    }
  }
`;

const Search: React.FC<SearchType> = ({ posts, setshowPosts }) => {
  console.log("posts in search", posts);
  let AllpostData = posts || AllpostDataDumy;
  const [hasText, setHasText] = useState<any>(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(AllpostData);
  const [selected, setSelected] = useState(-1);
  setshowPosts(options);
  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHasText(true) : setHasText(false);

    // updateText
    setInputValue(value);

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, "i");
    const resultOptions = AllpostData.filter((option: any) =>
      option.postTitle.match(filterRegex)
    );
    setOptions(resultOptions);
  };

  const handleDropDownClick = (clickedOption: any) => {
    setInputValue(clickedOption.postTitle);
    const resultOptions = AllpostData.filter(
      (option: any) => option.postTitle === clickedOption.postTitle
    );
    setOptions(resultOptions);
  };

  const handleDeleteButtonClick = () => {
    setInputValue("");
  };

  const handleKeyUp = (event: any) => {
    if (
      event.getModifierState("Fn") ||
      event.getModifierState("Hyper") ||
      event.getModifierState("OS") ||
      event.getModifierState("Super") ||
      event.getModifierState("Win")
    )
      return;
    if (
      event.getModifierState("Control") +
        event.getModifierState("Alt") +
        event.getModifierState("Meta") >
      1
    )
      return;
    if (hasText) {
      if (event.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.code === "Enter" && selected >= 0) {
        handleDropDownClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <div className="autocomplete-wrapper" onKeyUp={handleKeyUp}>
      <InputContainer hasText={hasText}>
        <img src="../images/icon_search.png" alt="search"/>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          className="autocomplete-input"
          onChange={handleInputChange}
          value={inputValue}
        />
        <div className="delete-button" onClick={handleDeleteButtonClick}>
          &times;
        </div>
      </InputContainer>
      {hasText ? (
        <DropDown
          options={options}
          handleDropDownClick={handleDropDownClick}
          selected={selected}
        />
      ) : null}
    </div>
  );
};

export const DropDown: React.FC<DropDownType> = ({
  options,
  handleDropDownClick,
  selected,
}) => {
  return (
    <DropDownContainer>
      {options.map((option: any, idx: any) => (
        <li
          key={idx}
          onClick={() => handleDropDownClick(option)}
          className={selected === idx ? "selected" : ""}
        >
          {option.postTitle}
        </li>
      ))}
    </DropDownContainer>
  );
};

export default Search;
