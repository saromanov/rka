import hasha from 'hasha';

export default function (str, pattern){
    let strlength = str.length;
    let patternlength = pattern.length;
    if(str == pattern){
        return 0;
    }
    let hpattern = hasha(pattern);
    let hs = hasha(str.substring(0, pattern.length));
    if(strlength < patternlength){
        return -1;
    }
    for(let i = 1;i <= strlength - patternlength+1;++i){
        if(hpattern == hs){
            if(str.substring(i-1, i + patternlength-1) == pattern){
                return i-1;
            }
        }
        hs = hasha(str.substring(i,i+patternlength));
    }
    return -1;
}
