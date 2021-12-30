export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "no-entry" */ "@/modules/daybook/views/NoEntrySelected.vue"
        ),
    },
  ],
};
