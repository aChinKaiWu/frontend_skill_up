import en from './en'

const locales = {
  en,
}

const language = window.navigator.languages.find(lang => !!locales[lang]) || 'en'

export default locales[language]
