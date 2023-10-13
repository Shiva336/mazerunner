#include<stdio.h>
#include<string.h>

int main() {
char str[] =  "In the quiEt forEst, a gEntle brEEze rustLed thE leavEs of talL trEEs, crEating a soothIng mElody. BirDs sang thEir sOngs.";
    int len = strlen(str);

    for(int i=0; i<len; i++) {
        if(str[i] >= 'a' && str[i] <='z')
            str[i] = str[i] - 32;
        else if(str[i] >= 'A' && str[i] <='Z')
            str[i] = str[i] + 32;
    }

    int i=0; int j=len-1;
    while(i<j) {
        char temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++; 
        j--;
    }

    for(int i=0; i<len; i++) {
        if(i %2 == 1) {
            printf("%c",str[i]);
        }
    }

    return 0;
}