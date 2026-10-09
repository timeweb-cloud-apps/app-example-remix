import type { Config } from "@react-router/dev/config";

export default {
  // Статическая сборка без сервера: приложение собирается в build/client.
  // Чтобы включить серверный рендеринг, установите `ssr: true`
  ssr: false,
  // Пререндерить все статические маршруты в HTML при сборке
  prerender: true,
} satisfies Config;
