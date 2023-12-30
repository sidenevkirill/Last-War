// �������� ������
const btn = document.querySelector(".btn-toggle");
// �������� ������� ������
const theme = document.querySelector("#theme-link");
// ����������� ������ �� ������
btn.addEventListener("click", function() {
  // ���� ������� ����� �������� "light-theme.css"
  if (theme.getAttribute("href") == "css/light.css") {
    // ��� ������������� �� "dark-theme.css"
    theme.href = "css/dark.css";
    // � ��������� ������ 
  } else {
    // �������������� �� "light-theme.css"
    theme.href = "css/light.css";
  }
});