function solution(emergency) {
    let emergencyCopied = emergency.slice()
    let first = emergencyCopied.sort((a,b)=>b-a)
    return emergency.map(x => x = first.indexOf(x) + 1)
  }