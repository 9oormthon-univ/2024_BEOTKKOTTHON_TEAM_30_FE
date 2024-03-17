export default function nameValidator(name) {
  const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;

  // 입력된 이름이 한글이 아닌 경우 or 입력된 이름의 길이가 10자를 초과하는 경우
  if (!koreanRegex.test(name) || name.length > 10) {
    return false;
  }
  
  return true;
}
