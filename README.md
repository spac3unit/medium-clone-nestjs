### Middleware

Что то что происходит с запросом до того как он попадает в контроллер

### Guard

Срабатывает до контроллера, возвращает true/false. Единственная задача - защищать экшены
Middleware - низкоуровневая штука, в который мы имеем полностью доступ к запросу и можем с ним делать что хотим. Guard нужен только для того чтобы проверить, есть ли у нас доступ к текущему route или нет.

Middleware срабатывает раньше Guard

### Generate migrations

```bash
pnpm run typeorm migration:generate src/migrations/AddRelationsBetweenArticleAndUser -d src/typeorm.config.ts
```

```bash
\x - expanded pg dispaly. changes pg results of select * from - output to more readable
```

### Руководство по NestJS. Часть 1

https://habr.com/ru/company/timeweb/blog/663234/
