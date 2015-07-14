import hasha from 'hasha';

export default function (str, pattern){
    let strlength = str.length;
    let patternlength = pattern.length;
    let hpattern = hasha(pattern);
    let hs = hasha(str.substr(0, pattern.length));
    if(strlength < patternlength){
        return -1;
    }
    for(let i = 0;i < strlength - patternlength+1;++i){
        if(hpattern == hs){
            if(str.substr(i, i+patternlength-1) === pattern){
                return i;
            }
        }
        hs = hasha(str.substr(i+1,i+patternlength));
    }
    return -1;
}
