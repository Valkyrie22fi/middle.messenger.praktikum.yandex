import Handlebars from 'handlebars'
import block1 from '../../assets/ac1.png'
import block2 from '../../assets/ac2.png'
import block3 from '../../assets/ac3.png'
import block4 from '../../assets/ac4.png'

export { default as ChatList } from './chatList.hbs?raw'

Handlebars.registerHelper('blocks', () => {
  return [
    {
      name: 'Карелина Милана',
      text: 'Картинка',
      count: 1,
      time: '10:35',
      avatar: block1,
    },
    {
      name: 'Дука Роман',
      text: 'Как погодка?',
      count: 1,
      time: '10:35',
      avatar: block2,
      active: true,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block4,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
    {
      name: 'Дука Ангелина',
      text: 'Что-то настроения нет(((',
      count: 1,
      time: '10:35',
      avatar: block3,
    },
  ]
})
