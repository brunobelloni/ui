import { defineLocale } from '../composables/defineLocale'

export default defineLocale({
  name: 'Čeština',
  code: 'cs',
  messages: {
    inputMenu: {
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      create: 'Vytvořit "{label}"'
    },
    commandPalette: {
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      close: 'Zavřít'
    },
    selectMenu: {
      noMatch: 'Žádná shoda',
      noData: 'Žádná data',
      create: 'Vytvořit "{label}"'
    },
    toast: {
      close: 'Zavřít'
    },
    carousel: {
      prev: 'Předchozí',
      next: 'Další',
      goto: 'Přejít na {slide}'
    },
    modal: {
      close: 'Zavřít'
    },
    slideover: {
      close: 'Zavřít'
    },
    alert: {
      close: 'Zavřít'
    },
    table: {
      noData: 'Žádná data'
    }
  }
})
