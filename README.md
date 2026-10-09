![Remix Logo](https://st.timeweb.com/cloud-static/apps-logo/remix.svg)

# Remix

Пример приложения [Remix](https://remix.run/), которое можно развернуть в **Timeweb Cloud Apps** без настройки.

Remix v2 продолжает развиваться как [React Router](https://reactrouter.com/) в режиме фреймворка, поэтому пример собран на React Router 8.

:tada: [Демо]

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Параметры деплоя

Приложение разворачивается как frontend: серверный рендеринг выключен (`ssr: false`), а страницы пререндерятся в HTML при сборке (см. `react-router.config.ts`).

| Параметр          | Значение        |
| ----------------- | --------------- |
| Фреймворк         | Remix           |
| Команда сборки    | `npm run build` |
| Директория сборки | `build/client`  |

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
npm install

# запуск в дев режиме с отслеживанием изменений
npm run dev

# сборка для продакшн с минификацией
npm run build
```
