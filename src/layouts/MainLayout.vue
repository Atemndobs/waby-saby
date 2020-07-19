<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Everything must be Clean
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <!--    <q-header elevated>
          <q-toolbar>
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="leftDrawerOpen = !leftDrawerOpen"
            />

    &lt;!&ndash;        <q-toolbar-title>
              <q-btn
                to="/"
                round
                color="primary"
                icon="home"
                side
                 />
            </q-toolbar-title>&ndash;&gt;


          </q-toolbar>
          <div class="q-px-lg q-pt-xl  q-mb-md">
            <div class="text-h4">PutzPlan</div>
            <div class="text-subtitle">{{todaysDate}}</div>
          </div>
          <q-img
          src="statics/cleaner.jpg"
          class="header-image absolute-top"
          />
        </q-header>-->

 <!--   <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area style="height: calc(100% - 175px); margin-top: 175px; border-right: 1px solid #ddd">
        <q-list padding>
          <q-item
            to="/"
            exact
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Task
            </q-item-section>
          </q-item>

          <q-item
            to="/help"
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>

          <q-item
            to="/task"
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="today" />
            </q-item-section>

            <q-item-section>
              Putz Plan
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="../statics/africa.jpg" style="height: 175px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../statics/avat_atem.png"  alt=""/>
          </q-avatar>
          <div class="text-weight-bold">Bertrand Atemkeng</div>
          <div>@Atemkeng5</div>
        </div>
      </q-img>

      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-drawer>-->

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>


      </q-list>
    </q-drawer>
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { date } from 'quasar'
  import { openURL } from 'quasar'

  export default {
    name: 'MainLayout',

    data () {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop,
        navs: [
          {
            label: 'Task',
            icon: 'list',
            to: '/task'
          },
          {
            label: 'Putz',
            icon: 'today',
            to: '/putz'
          },
          {
            label: 'Settings',
            icon: 'settings',
            to: '/settings'
          },
          {
            label: 'help',
            icon: 'help',
            to: '/help'
          },

        ]
      }
    },
    methods: {
      openURL
    },
    computed: {
      todaysDate(){
        let timeStamp = Date.now()
        let formattedString = date.formatDate(timeStamp, 'dd-MMM-YYYY:HH:mm.ss')
        return formattedString;
      }
    },
  }
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
  }

  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
