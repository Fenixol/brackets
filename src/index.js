module.exports = function check(str, bracketsConfig) {
  let chars = str.split(''),
        stack = [],
        open = [],
        close = [],
        closeIndex,
        openIndex;

        bracketsConfig.forEach(function(item) {
          open.push(item[0]);
          close.push(item[1]);
        });

        if(chars.length%2 !== 0){
          return false;
        }
           
        for (var i = 0, len = chars.length; i < len; i++) {
          openIndex = open.indexOf(chars[i]);
          if (openIndex !== -1) {
              stack.push(openIndex);
          }

          closeIndex = close.indexOf(chars[i]);

          if (closeIndex !== -1) {
              openIndex = stack.pop();
              if (closeIndex !== openIndex) {
                  return false;
              }
          }
        }

        if (stack.length > 0) {
          return false;
        }else{
          return true;
        }
}
