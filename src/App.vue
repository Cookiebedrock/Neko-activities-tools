<template>
  <v-app>
    <v-app-bar app flat>
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