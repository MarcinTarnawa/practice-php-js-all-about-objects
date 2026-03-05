> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s5e11-php-js-all-about-objects` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` PHP: JavaScript, All About Objects


Tym razem w pliku `app.js` znajdziesz rozbudowaną strukturę, która przechowuje informacje o książkach. Nazwa właściwości obiektu to number ISBN książki. Przypisana do niej wartość to obiekt, który przechowuje informacje o książce identyfikującej się tym numerem ISBN.

Twoim zadaniem będzie napisanie funkcji `getTitle` oraz `getTranslator`, które pozwolą pobrać informacje o konkretnej książce. Funkcja `getAuthor` została już napisana i możesz się na niej wzorować, jednak pamiętaj, że przyjmuje ona tylko jeden parametr.

W przypadku Twoich funkcji (metod) mamy dodatkową zależność, która jest identyfikowana przy pomocy drugiego parametru. Pamiętaj, aby sprawdzić, czy właściwość istnieje. Jeśli nie, to zwróć `null`.

W przypadku funkcji `getTranslator` sprawdź również, czy wartość dla konkretnego języka we właściwości `translator` nie jest równa `null`. Jeśli jest, oznacza to, że wybrany język jest językiem oryginału i wtedy należy zwrócić `false`.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **Wideo**, znajdziesz je na stronie [laracasts.com](https://laracasts.com/referral/bogolubow)*

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
