function padLeft(str, len){
  if (str.length >= len) {
    return str;
  } else {
    return padLeft("0" +str,len);
  }
}

function ChangeTimeLen(i){
  let TimeLenCheckedSelect = selectAll('.TimeLenChecked'+i);
  // console.log(TimeLenChoseAll[i]);
  if (TimeLenChoseAll[i]== '2') {
    DataLenMax[i] = TimeLenData[0].num[2];
    TimeLenCheckedSelect[0].style('z-index','1');
    TimeLenCheckedSelect[1].style('z-index','1');
    TimeLenCheckedSelect[2].style('z-index','3');
  } else if (TimeLenChoseAll[i]== '1') {
    DataLenMax[i] = TimeLenData[0].num[0];
    TimeLenCheckedSelect[0].style('z-index','3');
    TimeLenCheckedSelect[1].style('z-index','1');
    TimeLenCheckedSelect[2].style('z-index','1');
  } else if (TimeLenChoseAll[i]== '6') {
    DataLenMax[i] = TimeLenData[0].num[1];
    TimeLenCheckedSelect[0].style('z-index','1');
    TimeLenCheckedSelect[1].style('z-index','3');
    TimeLenCheckedSelect[2].style('z-index','1');
  };
  console.log(DataLenMax[i])
  DrawUpdateAll(i);
}
