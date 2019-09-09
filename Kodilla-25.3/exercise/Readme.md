# Express JS - terms

1. **req** - request object / obiekt zapytań
2. **res** - response object / obiekt odpowiedzi
3. **next()** - function to call next middleware function - or request will be left hanging / funkcja do wywołania funkcji oprogramowania pośredniczącego

## Błędy
* 400 - bad request - występuje gdy serwer nie może przetworzyć zapytania
* 401 - unauthorized - występuje gdy wymagane jest uwierzytelnienie, a nie zostało dostarczone
* 403 - forbidden - żądanie jest poprawne, jednak serwer odmawia odpowiedzi, może to wystąpić w przypadku gdy np. użytkownik jest zalogowany ale nie ma uprawnień do wykonania żądania
* 404 - not found - zasoby nie zostały znalezione
* 500 - internal server error - występuje gdy występują nieznane warunki i nie ma żadnej konkretnej wiadomości