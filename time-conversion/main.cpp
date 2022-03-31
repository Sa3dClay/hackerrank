#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

string timeConversion(string s) {
    // we need index (0,1)hh (3,4)mm (6,7)ss (8,9)am/pm
    char    h1  = s[0],
            h2  = s[1],
            m1  = s[3],
            m2  = s[4],
            s1  = s[6],
            s2  = s[7],
            d   = s[8];
    
    // 12:--:--AM => 00:--:--
    if(
        d == 'A'
        && h1 == '1'
        && h2 == '2'
    ) {
        s[0] = '0';
        s[1] = '0';
    }
    // (01PM : 07PM) 0(h<8):--:--PM => 1(h+2):--:--
    else if(
        d == 'P'
        && h1 == '0'
        && h2 < '8'
    ) {
        s[0] = h1+1;
        s[1] = h2+2;
    }
    // (08PM : 09PM) 0(h>7):--:--PM => 2(h-8):--:--
    else if(
        d == 'P'
        && h1 == '0'
        && h2 > '7'
    ) {
        s[0] = '2';
        s[1] = h2-8;
    }
    // (10PM : 12PM) 1h:--:--PM => 2(h+2):--:--
    else if(
        d == 'P'
        && h1 == '1'
    ) {
        if(
            h2 == '2'
            && (
                m1 > '0'
                || m2 > '0'
                || s1 > '0'
                || s2 > '0'   
            )
        ) {
            s[0] = h1;
            s[1] = h2;
        } else {
            s[0] = h1+1;
            s[1] = h2+2;
        }
    }
    
    // remove am/pm
    s.erase(8);
    
    // log result
    cout << s << endl;
    
    return s;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = timeConversion(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
