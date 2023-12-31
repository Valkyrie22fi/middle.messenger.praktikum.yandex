import Handlebars from 'handlebars';

import * as Components from './components';
import * as Pages from './pages';


const pages = {
  'login': [ Pages.LoginPage, {test: 'qwerty'} ],
  'register': [ Pages.RegisterPage ],
  'chat': [ Pages.ChatPage ],
  'chatNull': [ Pages.ChatNullPage ],
  'error500': [ Pages.Error500Page ],
  'error404': [ Pages.Error404Page ],
  'profile': [ Pages.ProfilePage ],
  'profileEdit': [ Pages.ProfileEditPage ],
  'profileEditPassword': [ Pages.ProfileEditPasswordPage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
