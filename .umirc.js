export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        dva: true,
        antd: true
      }
    ]
  ],
  theme: {
    "primary-color": "#0aa679"
  },
  base: "/react/react-count-game/",
  publicPath: "/react/react-count-game/",
  routes: [
    { path: "/", redirect: "/example", component: "./index.tsx" },
    { path: "/example", component: "./example/page.tsx" }
  ]
};
