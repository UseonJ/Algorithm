function solution(my_string, is_suffix) {
    suffixlen = is_suffix.length
    return my_string.slice(-suffixlen) === is_suffix? 1 : 0;
}