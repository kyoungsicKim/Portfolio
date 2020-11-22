$(function () {
  //인포그라피 모션
  function ig_motion() {
    $(".mv__ig .ig__elements>img").each(function () {
      let RANDOM = Math.random();
      RANDOM = RANDOM.toFixed(1) * 1000;

      let $el = $(this);

      setTimeout(function () {
        $el.addClass("swing");
      }, RANDOM);
    });
  }

  // 메인비주얼 텍스트 애니메이션
  let mvTxt = $(".mv__txt .txt__typing");
  let mvTxtAry = ["TEXT TEST01", "TEXT TEST02", "TEXT TEST03", "TEXT TEST04"];
  let mvTxtCnt = 0;

  // 문자열 입력 효과
  function typeMorphing(mvTxtCnt) {
    let txtSplit = mvTxtAry[mvTxtCnt].split("");
    let txtCnt = 0;
    let str = "";

    let typeInterval = setInterval(() => {
      str += txtSplit[txtCnt];

      txtCnt++;

      mvTxt.text(str);

      if (txtCnt === txtSplit.length) {
        clearInterval(typeInterval);
        mvTxt.addClass("active");
        setTimeout(() => deleteMorphing(str), 1500);
      }
    }, 150);
  }

  // 문자열 제거 효과
  function deleteMorphing(str) {
    let txtSplit = str.split("");
    let deleteStr = "";

    mvTxt.removeClass("active");

    let deleteInterval = setInterval(() => {
      txtSplit.pop();

      deleteStr = txtSplit.join("");

      mvTxt.text(deleteStr);

      if (txtSplit.length === 0) {
        clearInterval(deleteInterval);

        mvTxtCnt++;

        if (mvTxtCnt === mvTxtAry.length) {
          mvTxtCnt = 0;
        }

        setTimeout(() => typeMorphing(mvTxtCnt), 700);
      }
    }, 50);
  }

  // 캘린더
  const today = new Date();
  let date = new Date();
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const calendarCell = $(".calendar__cell");
  const calendarMonth = $(".calendar__month");
  const calendarPrev = $(".calendar__prev");
  const calendarNext = $(".calendar__next");

  calendarPrev.on("click", function () {
    date = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
    buildCalendar();
  });

  calendarNext.on("click", function () {
    date = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
    buildCalendar();
  });

  function buildCalendar() {
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth();
    let dateDate = date.getDate();
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1); //현재달의 첫째 날
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0); //현재 달의 마지막 날

    //캘린더 월,년 출력
    let monthStr = `${monthName[dateMonth]}, ${dateYear}`;
    calendarMonth.text(monthStr);

    // 셀 초기화
    calendarCell.empty();

    // 빈셀추가
    for (let i = 0; i < firstDate.getDay(); i++) {
      let calendarData = `<div class="cell empty"></div>`;
      calendarCell.append(calendarData);
    }

    for (let i = 0; i < lastDate.getDate(); i++) {
      let calendarData;
      // 오늘 날짜일 경우 today 클래스 추가
      if (
        i + 1 === dateDate &&
        dateYear === today.getFullYear() &&
        dateMonth === today.getMonth()
      ) {
        calendarData = `<div class="cell today"><p>${dateDate}</p></div>`;
        calendarCell.append(calendarData);
      } else {
        calendarData = `<div class="cell"><p>${i + 1}</p></div>`;
        calendarCell.append(calendarData);
      }
    }
  }

  // init
  function init() {
    ig_motion();
    buildCalendar();
    typeMorphing(mvTxtCnt);
  }

  init();
});
