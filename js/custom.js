$(document).ready(function () {
  // 렌터카 탭 클릭 이벤트 (UI 변경)
  $(".tab-btn").click(function () {
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");

    // 실제 구현 시에는 여기서 ajax로 데이터를 불러오거나 리스트를 교체합니다.
    // 여기서는 간단히 텍스트 효과만
    var location = $(this).text();
    console.log(location + " 렌터카 리스트 로딩 중...");
  });

  // 아이콘 메뉴 등 클릭 시
  $('a[href="#"]').click(function (e) {
    e.preventDefault(); // # 이동 방지
  });
});
