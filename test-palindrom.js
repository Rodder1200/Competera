const text =
  'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Rotator exercitation. aute irure dolod in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint mollom.';

function getPalindromes(string) {
  const regExp = /[A-z]+/gi;
  const res = string
    .match(regExp)
    .sort((a, b) => b.length - a.length)
    .filter(item => {
      if (item.length % 2 === 1) {
        return item.toLowerCase().slice(0, (item.length - 1) / 2) ===
          item
            .toLowerCase()
            .split('')
            .reverse()
            .join('')
            .slice(0, (item.length - 1) / 2);
      } else {
        return item.toLowerCase().slice(0, (item.length / 2) + 1) ===
          item
            .toLowerCase()
            .split('')
            .reverse()
            .join('')
            .slice(0, (item.length / 2) + 1);
      }
    });
  return res;
}

getPalindromes(text); //["Rotator", "mollom", "minim", "dolod", "esse"] 
                      //в розв'язку не було слова "minim", але це слово також паліндром

