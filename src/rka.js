import hasha from 'hasha';

export default function (str, pattern){
    let strlength = str.length;
    let patternlength = pattern.length;
    let hpattern = hasha(pattern);
    let hs = hasha(str.substring(0, pattern.length));
    if(strlength < patternlength){
        return -1;
    }
    for(let i = 0;i < strlength - patternlength+1;++i){
        if(hpattern == hs){
            return i-1;
        }
        hs = hasha(str.substring(i,i+patternlength));
    }
    return -1;
}
