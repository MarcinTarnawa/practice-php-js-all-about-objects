> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s5e11-php-js-all-about-objects` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` PHP: JavaScript, All About Objects

Tym razem stworzysz klasę, która będzie przechowywać informacje o studencie i jego ocenach.

Wymagania:

1. Obiekt będzie posiadał imię i nazwisko przekazywane podczas inicjalizacji (przy użyciu `new`).

2. Klasa:
- udostępnia metody,
- metody te pozwalają:
  - dodać ocenę z danego przedmiotu,
  - obliczyć średnią arytmetyczną z konkretnego przedmiotu,
  - obliczyć ogólną średnią arytmetyczną.

Przykład użycia może wyglądać tak:

```
const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33
```

Struktura danych w obiekcie może prezentować się następująco:
```
{
    firstName: 'Jan',
    lastName: 'Kowalski',
    grades: {
        maths: [4, 6],
        english: [3],
    }
}
```

To oznacza, że w konstruktorze deklaracje właściwości mogą wyglądać np. tak:
```
/* ... */ {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = {}
}
``` 

Aby rozróżnić, czy mamy podać średnią dla 1 przedmiotu, czy dla wszystkich, wystarczy sprawdzić, czy pierwszy parametr funkcji `.getAverageGrade()` jest zdefiniowany (różny od `undefined`).

Zwróć uwagę, że pobranie informacji o ocenach z konkretnego przedmiotu może się odbywać w ten sposób:
```
const subject = 'maths';
const grades = this.grades[subject];
```

Pamiętaj również, aby przy dodawaniu ocen sprawdzić, **czy dany przedmiot już istnieje**. Jeśli nie, to trzeba utworzyć odpowiednią właściwość w obiekcie, przypisać do niej pustą tablicę i wstawić odpowiednią ocenę, np.
```
if(typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
}

this.grades[subject].push(grade);
```


Powodzenia!

&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **Wideo**, znajdziesz je na stronie [laracasts.com](https://laracasts.com/referral/bogolubow)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
