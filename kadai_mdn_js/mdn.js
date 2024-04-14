// 今日の日付を取得
const Today = new Date();

// 年月日形式_1
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(Today.toLocaleDateString(undefined, options));

// 年月日形式_2
const TodayYear = Today.getFullYear();
const TodayMonth = Today.getMonth() + 1;
const TodayDate = Today.getDate();

console.log(TodayYear + "年" + TodayMonth + "月" + TodayDate + "日");
