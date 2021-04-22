<template>
  <v-container class="background" fluid>
    <v-col>
      <v-card class="mx-auto pt-1 ma-2" max-width="600" rounded="xl">
        <v-card-text>
          <div class="center-text">
            <h1 class="display-1 font-weight-bold">
              LiliumNeko<br class="display-less-540" />
              ❤️<br class="display-less-540" />
              LemonNeko
            </h1>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card class="mx-auto pt-1 pl-8 pr-8 ma-2" max-width="600" rounded="xl">
        <v-card-text>
                  <v-form v-model="valid">
            <v-row>
              <v-spacer>
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
  </v-container>
</template>

<script>
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
  }),
};
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