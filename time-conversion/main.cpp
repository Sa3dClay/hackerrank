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
    int hh = (s[0] - '0') * 10 + (s[1] - '0'),
        mm = (s[3] - '0') * 10 + (s[4] - '0'),
        ss = (s[6] - '0') * 10 + (s[7] - '0');
    string hh_str;
    
    if(hh == 12 && s[8] == 'A') {
        s[0] = '0';
        s[1] = '0';
    }
    else if(hh < 12 && s[8] == 'P') {
        hh += 12;
        hh_str = to_string(hh);
        s[0] = hh_str[0];
        s[1] = hh_str[1];
    }
    
    s.erase(8);
    
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
