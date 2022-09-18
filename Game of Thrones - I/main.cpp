#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

string gameOfThrones(string s) {
    string ability = "YES", visited="";
    int counter = 1, oddCounter = 0;

    if(s.length() % 2 == 0) {
        for(int i=0; i<s.length(); i++) {
            if(visited.find(s[i]) != string::npos) {
                continue;
            } else {
                visited.push_back(s[i]);
            }

            for(int j = (i+1); j<s.length(); j++) {
                if (s[i] == s[j]) {
                    counter++;
                }
            }

            if(counter%2 != 0) {
                ability = "NO";
                break;
            } else {
                counter=1;
            }
        }
    } else {
        for(int i=0; i<s.length(); i++) {
            if(visited.find(s[i]) != string::npos) {
                continue;
            } else {
                visited.push_back(s[i]);
            }

            for(int j = (i+1); j<s.length(); j++) {
                if (s[i] == s[j]) {
                    counter++;
                }
            }

            if(counter%2 != 0) {
                oddCounter++;

                if(oddCounter > 1) {
                    ability = "NO";
                    break;
                }
            } else {
                counter=1;
            }
        }
    }

    return ability;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = gameOfThrones(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
