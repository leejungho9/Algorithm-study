function solution(n, lost, reserve) {

    let possible =  n - lost.length     // 체육 참여가 가능한 사람의 수 (전체 학생수 - 체육복 잃어버린 사람의 수)
    
    let realLost = [];
    // 여분의 체육복이 있는 사람이 체육복을 도난당했다면..
    for(let i = 0; i < lost.length;  i++) {
        if(reserve.includes(lost[i])){  
            possible++;
            reserve = reserve.filter((re) =>  re !== lost[i])
        } else {
            realLost.push(lost[i]); //여분이 없는 사람 ==== 진짜 잃어비린 사람
        }
    }
    
    console.log(realLost) //〉	lost =  [6, 5, 4, 2] reserve =  [2, 4]  realLost ===[ 6, 5 ]

    //테스트  13, 14 줄만 에러나서 검색해보니 
    //lost와 reserve가 정렬되지 않은 배열이라고 정렬하란다..
    realLost.sort((a,b) => a-b)
    
    //진짜 잃어버린 사람의 배열로 조건 돌리기
     for(let i = 0; i < realLost.length;  i++) {
        if(reserve.includes(realLost[i]-1)) {
            possible++;
            reserve = reserve.filter((re) =>  re !== realLost[i]-1)
         }else if(reserve.includes(realLost[i]+1)) {
            possible++;
            reserve = reserve.filter((re) =>  re !== realLost[i]+1)    
        }
    }
    
    
   
    return possible
    
}