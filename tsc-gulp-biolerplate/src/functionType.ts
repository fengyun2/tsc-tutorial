interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  let result = source.search(subString)
  if (result == -1) {
    return false;
  } else {
    return true;
  }
}

export default mySearch
