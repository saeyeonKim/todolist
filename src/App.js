import "./App.css";
import React, { useState } from "react";
import CustomButton from "./components/CustomButton";
import Content from "./components/Content";

function App() {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      todo: "리액트 기초를 공부해",
      isDone: true,
    },
    {
      id: 2,
      title: "리액트 공바하기",
      todo: "리액트 기초를 공바해",
      isDone: true,
    },
    {
      id: 3,
      title: "리액트 공비하기",
      todo: "리액트 기초를 공비해",
      isDone: false,
    },
    {
      id: 4,
      title: "리액트 공보하기",
      todo: "리액트 기초를 공보해",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  // useState를 사용하는 이유는 데이터를 저장할 공간을 만들어주는 것. [a,b]에서 a는 내가 지정한 값, b는 변경할 변수
  // ""를 쓰는 이유는 안에 들어갈 값이 비어있다는 뜻, ""가 있어야 안에 값이 들어갈 수 있다.
  // 형식은 위의 방식대로!!

  const addUserHandler = () => {
    const newContent = {
      id: contents.length + 1, //contents의 길이에 +1씩 해서 카드가 하나씩 늘어나게 함.
      title: title,
      todo: todo,
      isDone: true,
    };
    setContents([...contents, newContent]);
    // ...은 이미 들어있는 애들을 모두 ...로 가져와서 그 뒤에 newContent로 넣겠다.
    // ...이 없으면 앞에 값들은 제대로 복사가 되지 않아서 사라진다.
  };

  const deleteUserHandler = (id) => {
    const newContentList = contents.filter((content) => content.id !== id); //contents에서 content.id와 id값이 다른 것을 고른다.
    setContents(newContentList); //기존의 contents배열을 setContents가 newContentList로 바꿔준다.
  };

  const onChangeHandler = (id) => {
    const copy = [...contents];
    setContents(copy);
    // setContents(
    //   contents.map((content) => {
    //     return content.id === id ? (content.isDone = true) : content;

    //     //content를 content.isDone = false로 했을 때 삭제하기와 완료버튼을 누르면 전체가 다 삭제된다.
    //     // content id값이 내 id값이랑 같으면 true 값이 할당, 아니면 content(그대로놓는다)
    //     // map은 배열 안의 정한 값만 골라서 바꿀 수 있는데 filter는 그 중에 맞는 조건만 골라서 가져온다.
    //   })
    // );
  };

  return (
    <div className="App">
      <div className="title">
        <span className="mylist">My Todo List</span>
        <span className="mylists">React</span>
      </div>
      <div className="myarea">
        <div>
          <label className="formLabel">제목</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <label className="formLabel">내용</label>
          <input value={todo} onChange={(e) => setTodo(e.target.value)}></input>
        </div>
        <CustomButton //
          backgroundColor="teal"
          border="0"
          width="140px"
          color="white"
          textAlign="center"
          onClick={addUserHandler}
        >
          추가하기
        </CustomButton>
        {/* 컴포넌트를 따로 나누는 이유: 고정된 값을 주기 위해! 
        예를들어 customButton에 고정된 값을 주고 위에처럼 바꿀 값만 지정해줘서 코드를 줄일 수 있다. 
        버튼마다 다른 모양과 색깔 등을 지정할 수 있지만 기본적인 값은 같다.*/}
      </div>

      <div>
        <h2>Working..🔥</h2>
        <div className="wrap">
          {contents.map((content) =>
            content.isDone === true ? (
              <Content
                deleteUserHandler={deleteUserHandler}
                onChangeHandler={onChangeHandler}
                content={content}
                key={content.id}
              ></Content>
            ) : null
          )}
        </div>
        <h2>Done..!🎉</h2>
        <div className="wrap">
          {contents.map(
            (content) =>
              content.isDone === false ? (
                <Content
                  deleteUserHandler={deleteUserHandler}
                  onChangeHandler={onChangeHandler}
                  content={content}
                  key={content.id}
                ></Content>
              ) : null //null은 빈값을 주는것. false일 경우만 출력하기 위해 일부러 true인 경우는 출력하지 않는다.
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
