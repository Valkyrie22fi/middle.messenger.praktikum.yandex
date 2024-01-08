import Handlebars from 'handlebars'

import * as Components from './components'
import * as Pages from './pages'

const pages = {
  login: [Pages.LoginPage, { test: 'qwerty' }],
  register: [Pages.RegisterPage],
  chat: [Pages.ChatPage],
  chatNull: [Pages.ChatNullPage],
  error500: [Pages.Error500Page],
  error404: [Pages.Error404Page],
  profile: [Pages.ProfilePage],
  profileEdit: [Pages.ProfileEditPage],
  profileEditPassword: [Pages.ProfileEditPasswordPage],
}

Object.entries(Components).forEach(([name, component]) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Handlebars.registerPartial(name, component)
})

function navigate(page: string): void {
  const [source, context] = pages[page]
  const container = document.getElementById('app') ?? false
  container.innerHTML = Handlebars.compile(source)(context)
}

document.addEventListener('DOMContentLoaded', () => {
  navigate('login')
})

document.addEventListener('click', (e) => {
  const page: string = e.target.getAttribute('page')
  if (page !== '') {
    navigate(page)

    e.preventDefault()
    e.stopImmediatePropagation()
  }
})
