import CustomButton from "./CustomButton";

function Content(props) {
  return (
    <div>
      <div className="mycard">
        <h2>{props.content.title}</h2>
        <p>{props.content.todo}</p>
        <CustomButton
          border="3px solid red"
          backgroundColor="transparent"
          width="45%"
          margin="0 10px 0 0"
          onClick={() => {
            props.deleteUserHandler(props.content.id);
          }}
        >
          삭제하기
        </CustomButton>
        <CustomButton
          border="3px solid green"
          backgroundColor="transparent"
          width="45%"
          onClick={() => {
            props.onChangeHandler(props.content.isDone);
            if (props.content.isDone === true) {
              props.content.isDone = false; //isDone이 true가 맞으면 눌렀을때 isDone의 값을 false로 바꾼다.
            } else if (props.content.isDone === false) {
              props.content.isDone = true; //isDone이 false가 맞으면 눌렀을 때 isDone의 값을 true로 바꾼다.
            }
          }}
        >
          {props.content.isDone === true ? "완료" : "취소"}
          {/* props의 content의 isDone이 true가 맞으면 완료버튼, 아니면 취소버튼 */}
        </CustomButton>
      </div>
    </div>
  );
}
export default Content;
