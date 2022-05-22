const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal(value) {
      this.goals.push(this.enteredGoalValue);
    },
  },
});

app.mount("#user-goals");
