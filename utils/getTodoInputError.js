function getTodoInputError(value) {
  if (value.length < 1) {
    return "할 일을 입력해주세요.";
  }
  if (value.length > 50) {
    return "할 일은 50자 이하로 입력해주세요.";
  }

  return null;
}

export default getTodoInputError;
