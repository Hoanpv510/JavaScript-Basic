"use strict";
const showDate = document.querySelector("#date");
const d = new Date();

class DayVietNam {
  constructor(year, month, day, hour, minute, second) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  showDay() {
    let text = "Việt Nam,";
    switch (this.day) {
      case 0:
        text += "Thứ Hai";
        break;
      case 1:
        text += "Thứ Ba";
        break;
      case 2:
        text += "Thứ Tư";
        break;
      case 3:
        text += "Thứ Năm";
        break;
      case 4:
        text += "Thứ sáu";
        break;
      case 5:
        text += "Thứ Bảy";
        break;
      case 6:
        text += "Chủ nhật";
    }

    text += `, Ngày ${this.day} Tháng ${this.month + 1} Năm ${this.year} `;
    if (this.hour < 11) {
      text += `${this.hour} giờ ${this.minute} phút ${this.second} giây sáng`;
    } else if (this.hour > 11 && this.hour < 19) {
      text += `${this.hour} giờ ${this.minute} phút ${this.second} giây chiều`;
    } else {
      text += `${this.hour} giờ ${this.minute} phút ${this.second} giây tối`;
    }
    return text;
  }
}
const dayVN = new DayVietNam(
  d.getFullYear(),
  d.getMonth(),
  d.getDate(),
  d.getHours(),
  d.getMinutes(),
  d.getSeconds()
);
// console.log(dayVN);

showDate.innerHTML = dayVN.showDay();

// function formatDate(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return (date.getDate() + "/" + (date.getMonth()+1) + "/"+ date.getFullYear() + "  " + strTime);
//   }
