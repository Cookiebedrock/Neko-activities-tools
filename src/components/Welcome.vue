<template>
  <v-container class="background" fluid>
    <v-row dense>
    <v-col>
      <v-card class="mx-auto ma-2" max-width="600" rounded="xl">
        <v-card-text>
          <div class="center-text">
            <div class="display-0.5 ">猫猫的婚礼和生日<br><br class="display-less-540" />
              LiliumNeko
              ❤️
              LemonNeko
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
    <v-row dense>
    <v-col>
      <v-card class="mx-auto pl-4 pr-4 ma-2" max-width="600" rounded="xl">
        <v-card-text>
          <h3 class="font-weight-bold">告示牌✔️</h3>
          <br>
          <v-row justify="space-between">
            <v-col cols="7">
              <v-chip
                  class="white--text "
                  color="green"
                  label
                  small
              >
                准备
              </v-chip>
              love is love
            </v-col>
            <v-col
                class="text-right"
                cols="5"
            >
              2021/12/11 CST
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="7">
              <v-chip
                  class="white--text "
                  color="green"
                  label
                  small
              >
                准备
              </v-chip>
              love is love
            </v-col>
            <v-col
                class="text-right"
                cols="5"
            >
              2021/12/11 CST
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    </v-row>
      <v-row dense>
    <v-col>
      <v-card class="mx-auto pl-4 pr-4 ma-2" max-width="600" rounded="xl">
        <v-card-text>
          <v-form v-model="valid">
            <v-row>
              <v-spacer
                ><v-card-text>
                  <h3 class="font-weight-bold">活动报名✍️</h3>
                </v-card-text>
                <v-col>
                  <v-text-field
                    v-model="nickname"
                    :rules="nameRules"
                    :counter="10"
                    label="阁下的昵称"
                    dense
                    clearable
                    required
                    shaped
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="电子邮件地址"
                    dense
                    clearable
                    required
                  ></v-text-field>
                </v-col>

                <v-col class="d-flex">
                  <v-select :items="items" label="要喜糖吗？" dense></v-select>
                </v-col>

                <v-col align-self="center">
                  <v-btn block rounded color="primary" dark large elevation="0">
                    提交
                  </v-btn>
                </v-col>
              </v-spacer>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
      </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Welecome",
  data: () => ({
    valid: false,
    nickname: "",
    nameRules: [
      (v) => !!v || "昵称为必填项",
      (v) => v.length <= 15 || "昵称须小于15个字符",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "电子邮件为必填项",
      (v) => /.+@.+/.test(v) || "无效的电子邮件地址",
    ],
     items: ['要', '不要', '要一袋', '要抱抱'],
  }),
};
axios({
  url: "http://192.168.31.1",
  method: "get",
  data: {
    nickname: "",
    email: "",
  },
});
</script>
<style scoped>
.background {
  background: linear-gradient(
      rgba(255, 0, 0, 0.3) 50%,
      rgba(255, 0, 0, 0.5) 50%
    ),
    linear-gradient(
      to left,
      rgba(255, 0, 0, 0.3) 50%,
      rgba(255, 169, 49, 0.32) 50%
    );
  background-size: 50px 50px;
  height: 100%;
}
.center-text {
  text-align: center;
}
.display-less-540 {
  display: none;
}
@media screen and (max-width: 540px) {
  .display-less-540 {
    display: unset;
  }
}
</style>