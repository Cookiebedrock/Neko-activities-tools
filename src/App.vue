<template>
  <v-app>
    <v-system-bar app class="secondary" style="height: 50px;">
      <div class="container font-weight-black text-body-2 text-md-h6 text-center white--text"> 🎉
        活动马上要开始了哦~
      </div>
    </v-system-bar>
    <v-app-bar app flat >
      <v-tabs>
        <v-spacer></v-spacer>
        <v-tab to="/">欢迎</v-tab>
        <v-tab to="/Statistics">小调查</v-tab>
        <v-tab to="/Map">集合点</v-tab>
        <v-spacer></v-spacer>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>