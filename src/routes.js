import ChooseDifficulty from './components/ChooseDifficulty'
import ChanceTable from './components/ChanceTable'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: ChooseDifficulty },
    { path: '/calc/:difficulty', name:'calc', component: ChanceTable, props: true },
  ];

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

export default router